import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const Post = () => {
	const params = useParams();
	const [server] = useState(process.env.REACT_APP_SERVER_URL)
 
  const [post, setPost] = useState<Post>()
console.log(post)
  const getPosts = async () => {
    const a = await fetch(`${server}/posts/${params.id}`)
    const res = await a.json()
    setPost(res)
  }
  useEffect(() => {
    getPosts()
  },[])
  
  return (
		<>
	
			<div >
					{post && ( post.message ? <PageNotFound /> : ( 
					<div key={post.id}>
							<h3>{post.title}</h3>
							<h4>by {post.author}</h4>
							<p>{post.body}</p>
						</div>
						))}
			</div>
		</>
  );
}

export default Post;
