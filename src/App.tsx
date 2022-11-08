import { Route, Routes } from 'react-router-dom';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PostList from './components/PostList';

function App() {
  
  return (
    <div>
      <Nav />
      <Login />
      <Routes>
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
