import { Route, Routes } from 'react-router-dom';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PostList from './components/PostList';
import { AuthProvider } from './context/UserContext';

function App() {
 
  return (
    <>
    <AuthProvider>
      <>
        <Nav />
        <Login />
        <Routes>
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/:id/edit' element={<EditPost />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
      </AuthProvider>
    </>
  );
}

export default App;
