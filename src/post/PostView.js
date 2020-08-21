import React from 'react';
import Post from './Post';
import Comments from './Comments';

const PostView = ({ postID }) => {
  return (
    <div>
      <Post postID={postID} />
      <Comments postID={postID} />
    </div>
  );
};

export default PostView;