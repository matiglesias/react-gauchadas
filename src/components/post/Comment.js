import React, { useState, useCallback, memo, useEffect } from 'react';
import moment from 'moment';
import Responses from './Responses';
import Response from './Response';
import CommentForm from './CommentForm';

const Comment = memo(({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showResponses, setShowResponses] = useState(false);
  const [responsesLoaded, setResponsesLoaded] = useState(false);
  const [addedResponses, setAddedResponses] = useState([]);

  const onShowResponses = (e) => {
    e.preventDefault();
    if (showResponses) (addedResponses.length && setResponsesLoaded(false))
    else setResponsesLoaded(true);

    addedResponses.length && setAddedResponses([]);
    setShowResponses(!showResponses);
  };

  const addResponse = useCallback(response => {
    setAddedResponses(addedResponses => [response, ...addedResponses]);
  }, []);

  useEffect(() => {
    addedResponses.length && !showResponses && setResponsesLoaded(showResponses);
  }, [addedResponses, showResponses]);

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
          <a href="/" onClick={(e) => { e.preventDefault(); setShowReplyForm(!showReplyForm) }} className="reply">Reply</a>
          <a href="/" onClick={onShowResponses}> {showResponses ? "Hide responses" : "Show responses"}</a>
          {showReplyForm && <CommentForm postID={comment.postID} commentID={comment._id} addComment={addResponse} />}
          {addedResponses.map(r => <Response key={r._id} response={r} addResponse={addResponse} />)}
          {responsesLoaded && <Responses show={showResponses} postID={comment.postID} commentID={comment._id} addResponse={addResponse} />}
        </div>
      </div>
    </div>
  );
});

export default Comment;