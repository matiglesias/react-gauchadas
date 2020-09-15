import React, { useState, useCallback, memo } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { GET_COMMENTS } from '../../apis/backend';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = memo(({ postID }) => {
  const [addedComments, setAddedComments] = useState([]);
  const comments = useRequest(GET_COMMENTS, { postID });

  const addComment = useCallback(comment => {
    setAddedComments(addedComments => [comment, ...addedComments]);
  }, []);

  const commentMapping = (c) => <Comment key={c._id} comment={c} />

  return (
    <div className="ui comments text container">
      <h3 className="ui dividing header">Comments</h3>
      <CommentForm postID={postID} addComment={addComment} />
      {addedComments.length > 0 && addedComments.map(commentMapping)}
      {comments.map(commentMapping)}
    </div>
  );
});

export default Comments;
