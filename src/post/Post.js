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

  const postDate = () => {
    if (post) {
      const date = new Date(post.createdAt);
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="ui stackable container">
      <div className="row" id="post-header">
        <h1 className="ui header">{post.title}</h1>
        <div className="ui sub-header">{postDate()}</div>
      </div>
      <div className="row" id="post-content">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
