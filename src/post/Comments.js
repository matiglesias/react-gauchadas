import React from 'react';
import moment from 'moment';
import { useRequest } from '../hooks/useRequest';
import { GET_COMMENTS } from '../apis/backend';

const Comments = ({ postID }) => {
  const comments = useRequest(GET_COMMENTS, { postID });

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
