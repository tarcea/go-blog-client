import { Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Message from './components/Message';
import Nav from './components/Nav';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PostList from './components/PostList';
import Signup from './components/Signup';
import { useMessage } from './context/MessageContext';
import { useAuth } from './context/UserContext';

function App() {

  const { currentUser} = useAuth()
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

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
