import React, { useState, useEffect } from 'react';
import Backend from '../services/backend';

const Post = ({ postID }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const backend = new Backend();
    backend
      .getPost(postID)
      .then((result) => setPost(result.data || []))
      .catch((err) => console.log(backend.isCancelled(err)));

    return () => backend.dispose();
  }, [postID]);
  return (
  );
};

export default Post;
