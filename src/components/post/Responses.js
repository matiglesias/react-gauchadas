import React, { memo } from 'react';
import { useRequest } from '../../hooks/useRequest';
import { GET_RESPONSES } from '../../apis/backend';
import Response from './Response';


const Responses = memo(({ postID, commentID, show, addResponse }) => {
  const responses = useRequest(GET_RESPONSES, { postID, commentID });

  return (
    <>
      {show && responses.map((r) => (<Response key={r._id} response={r} addResponse={addResponse} />))}
    </>
  );
});

export default Responses;