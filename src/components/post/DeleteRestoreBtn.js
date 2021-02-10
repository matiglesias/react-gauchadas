import React, { useState } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { DELETE_POST, RESTORE_POST } from '../../apis/backend';

const DeleteRestoreBtn = ({ isDeleted, setIsDeleted, postID }) => {
  const [requestMethod, setRequestMethod] = useState(null);
  const post = useRequest(requestMethod, { postID });

  const onClick = () => {
    isDeleted ? setRequestMethod(RESTORE_POST) : setRequestMethod(DELETE_POST);
    setIsDeleted(!isDeleted);
  }

  return (
    <>
      {isDeleted ? <button onClick={onClick} className="ui primary basic button"> Restore post </button>
        : <button onClick={onClick} className="negative ui button"> Delete post </button>}
    </>
  );
};

export default DeleteRestoreBtn;
