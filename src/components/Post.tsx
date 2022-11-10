import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import style from '../styles/Post.module.css';
import PageNotFound from './PageNotFound';

const Post = () => {
	const params = useParams();
	const navigate = useNavigate()
	const [server] = useState(process.env.REACT_APP_SERVER_URL)
 
  const [post, setPost] = useState<Post>()

	const { uid } = useAuth()
	
  const getPosts = async () => {
    const a = await fetch(`${server}/posts/${params.id}`, {
			method: 'GET',
		})
    const res = await a.json()
    setPost(res)
  }
	
const deletePost = async () => {
	await fetch(`${server}/posts/${params.id}`, {
		method: 'DELETE',
	})
	
	navigate("/posts")
}

  useEffect(() => {
    getPosts()
  },[])
 
  return (
		<>
			<div className={style.container}>
				{post && ( 
					post.message ?
					<PageNotFound /> :
					( 
					<>
					<div className={style.commands}>
						<Link to="/posts" className={style.link}>Back</Link>
						{+uid === post.userId &&
							<span>
							<Link
								to="/posts"
								onClick={deletePost}
								className={style.link}
							>
								Delete
							</Link>
							<Link
								to={`/posts/${post.id}/edit`}
								className={style.link}
							>
								Edit
							</Link>
						</span>
						}
						
					</div>
						<div key={post.id}>
							{/* <h3 className={style.by}>{post.author}</h3> */}
							<h3 className={style.title}>{post.title}</h3>
							<section className={style.body}>{post.body}</section>
						</div>
					</>
				)
				)}
			</div>
		</>
  );
}

export default Post;
