import React, { useState, useEffect } from 'react';
import Backend from '../services/backend';

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

  return (
  );
};

export default Comments;
