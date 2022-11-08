import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import PostList from './components/PostList';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:id' element={<Post />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
