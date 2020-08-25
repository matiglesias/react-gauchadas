import React, { useState, useEffect } from 'react';
import Backend from '../services/backend';
import moment from 'moment';

const Comments = ({ postID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const backend = new Backend();
    backend
      .getComments(postID)
      .then((result) => setComments(result.data || []))
      .catch((err) => console.log(backend.isCancelled(err)));

    return () => backend.dispose();
  }, [postID]);

  const showComment = (c, index) => {
    return (
      <div key={index} className="comment">
        <a href="#goToUser" className="avatar">
          <img src="avatars/avatar1.jpg" alt="Avatar" />
        </a>
        <div className="content">
          <a href="#goToUser" className="author">Autor</a>
          <div className="metadata">
            <span className="date">{moment(c.createdAt).fromNow()}</span>
          </div>
          <div className="text">
            {c.content}
          </div>
          <div className="actions">
            <a href="#showReplyForm" className="reply">Reply</a>
            <a href="#showResponses">Show responses</a>
          </div>
        </div>
      </div >
    )
  }

  return (
    <div className="ui comments text container">
      <h3 className="ui dividing header">Comments</h3>
      {comments.map(showComment)}
    </div>
  );
};

export default Comments;
