import React from 'react';
import Post from './Post';
import Comments from './Comments';

const PostView = ({ postID }) => {
  return (
    <>
      <Post postID={postID} />
      <Comments postID={postID} />
    </>
  );
};

export default PostView;