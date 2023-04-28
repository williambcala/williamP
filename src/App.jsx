import React from 'react';
import { PublicacionProvider } from './PublicacionContext';
import PostList from './PostList';
import AddPost from './AddPost';

const App = () => {
  return (
    <PublicacionProvider>
      <div className="App">
        <AddPost />
        <PostList />
      </div>
    </PublicacionProvider>
  );
};

export default App;