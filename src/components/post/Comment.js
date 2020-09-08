import React, { useState } from 'react';
import moment from 'moment';
import Responses from './Responses';

const Comment = ({ comment }) => {
  const [showResponses, setShowResponses] = useState(false);
  const [responsesLoaded, setResponsesLoaded] = useState(false);

  const changeShowing = () => {
    if (!responsesLoaded) setResponsesLoaded(true);
    setShowResponses(!showResponses);
  };

  return (
    <div id={`comment-${comment._id}`} className="comment">
      <a href="#goToUser" className="avatar">
        <img src="avatars/avatar1.jpg" alt="Avatar" />
      </a>
      <div className="content">
        <a href="#goToUser" className="author">Autor</a>
        <div className="metadata">
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
        <div className="text">
          {comment.content}
        </div>
        <div className="actions">
          <a href="#showReplyForm" className="reply">Reply</a>
          <a href="#showResponses" onClick={changeShowing}> {showResponses ? "Hide responses" : "Show responses"}</a>
          {responsesLoaded && <Responses show={showResponses} postID={comment.postID} commentID={comment._id} />}
        </div>
      </div>
    </div >
  );
};
export default Comment;