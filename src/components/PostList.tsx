import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/PostList.module.css';

const PostList = () => {
  const [server] = useState(process.env.REACT_APP_SERVER_URL)
  const [posts, setPosts] = useState<Post[]>()
console.log(posts)
  const getPosts = async () => {
    const a = await fetch(`${server}/posts`)
    const res = await a.json()
    setPosts(res)
  }

  
  useEffect(() => {
    getPosts()
  },[])
  
  return (
    <div className={style.container}>
        <h1 className={style.header}>Bring your posts and build something great</h1>
        {posts && posts.map((post: Post) => (
          <div key={post.id} className={style.content}>
            <Link to={`/posts/${post.id}`}>
              <h3>
                {post.title}
              </h3>
              <h4>by {post.author}</h4>
              <p className={style.postBody}>{post.body.slice(0, 100)}</p>
            </Link>
          </div>
        ))}
       
    </div>
  );
}

export default PostList;
