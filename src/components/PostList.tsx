import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <header className="App-header">
        <h1>Blog</h1>
        <h2>Posts</h2>
        {posts && posts.map((post: Post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>
                {post.title}
              </h3>
              <h4>by {post.author}</h4>
              <p>{post.body.slice(0, 100)}</p>
            </Link>
          </div>
        ))}
      </header>
    </div>
  );
}

export default PostList;
