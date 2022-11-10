import { Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import Dashboard from './components/Dashboard';
import EditPost from './components/EditPost';
import Footer from './components/Footer';
import Login from './components/Login';
import Message from './components/Message';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PostList from './components/PostList';
import Signup from './components/Signup';
import { useMessage } from './context/MessageContext';

function App() {
  const {message} = useMessage()
 
  return (
    <>
      <div>
        <Nav />
        {message && <Message />}
        <Routes>
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/new' element={<AddPost />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/:id/edit' element={<EditPost />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
