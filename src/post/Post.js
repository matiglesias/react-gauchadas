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

  const paragraphs = () => {
    if (post.body) {
      return post.body.split("\n").map((p, index) => (<p key={index}>{p}</p>))
    }
  }

  return (
    <div className="ui main text container" style={{ "marginTop": '7em' }}>
      <h1 className="ui dividing huge header">
        <div className="ui sub header" style={{ "textAlign": 'right' }}>{postDate()}</div>
        {post.title}
      </h1>
      <div className="ui hidden divider"></div>
      <div className="row" id="post-content">
        {paragraphs()}
    </div>
    </div>
  );
};

export default Post;
