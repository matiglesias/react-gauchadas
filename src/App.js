import React from 'react';
import PostView from './components/post/PostView'
import Navbar from './components/navbar/Navbar'

const postID = "5f5b9fd030955bc7142f9715" // Should get it from route

function App() {
  return (
    <div className="ui container">
      <Navbar />
      <PostView postID={postID} />
      <br></br>
    </div>
  );
}

export default App;
