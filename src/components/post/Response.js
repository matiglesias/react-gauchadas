import React, { useState, memo } from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';


const Response = memo(({ response, addResponse, canRespond }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="comments">
      <div className="comment">
        <a href="#goToUser" className="avatar">
          <img src="avatars/avatar1.jpg" alt="Avatar" />
        </a>
        <div className="content">
          <a href="#goToUser" className="author">Respondedor</a>
          <div className="metadata">
            <span className="date">{moment(response.createdAt).fromNow()}</span>
          </div>
          <div className="text">
            {response.content}
          </div>
          <div className="actions">
            {canRespond && <a href="/" onClick={(e) => { e.preventDefault(); setShowReplyForm(!showReplyForm) }} className="reply">Reply</a>}
            {canRespond && showReplyForm && <CommentForm postID={response.postID} commentID={response.commentID} addComment={addResponse} />}
          </div>
        </div>
      </div>
    </div>
  )
});

export default Response;