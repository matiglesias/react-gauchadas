import React from 'react';
import { useRequest } from '../../hooks/useRequest';
import { GET_COMMENTS } from '../../apis/backend';
import Comment from './Comment';

const Comments = ({ postID }) => {
  const comments = useRequest(GET_COMMENTS, { postID });

  return (
    <div className="ui comments text container">
      <h3 className="ui dividing header">Comments</h3>
      {comments.map((c) => <Comment key={c._id} comment={c} />)}
    </div>
  );
};

export default Comments;
