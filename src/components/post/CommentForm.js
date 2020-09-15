import React, { useState, useEffect, memo } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { POST_COMMENT, POST_RESPONSE } from '../../apis/backend';

const CommentForm = memo(({ postID, commentID, addComment }) => {
  const [bodyParams, setBodyParams] = useState(null);
  const [content, setContent] = useState("");

  const method = commentID ? POST_RESPONSE : POST_COMMENT;
  const formSubmit = useRequest(method, { postID, commentID }, null, bodyParams);

  useEffect(() => {
    if (formSubmit._id) {
      addComment(formSubmit);
      setContent("");
    }
  }, [formSubmit, addComment]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const trimmed = content.trim();
    trimmed && setBodyParams({ content: trimmed });
  }

  //TODO: ver cantidad de rerenders duplicada
  return (
    <form onSubmit={onFormSubmit} className="ui reply form">
      <div className="field">
        <input onChange={e => setContent(e.target.value)} value={content}></input>
      </div>
      <button className="ui primary submit labeled icon button">
        <i className="icon edit"></i> Add {!commentID ? "comment" : "reponse"}
      </button>
    </form>
  )
});

export default CommentForm;