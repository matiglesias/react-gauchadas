import React from 'react';
import moment from 'moment'
import { useRequest } from '../../hooks/useRequest';
import { GET_POST } from '../../apis/backend';

const Post = ({ postID }) => {
  const post = useRequest(GET_POST, { postID });

  const paragraphs = () => {
    if (post.body) {
      return post.body.split("\n").map((p, index) => (<p key={index}>{p}</p>))
    }
  }

  return (
    <>
      <h1 className="ui dividing huge header">
        <div className="ui sub header" style={{ "textAlign": 'right' }}>{moment(post.createdAt).calendar()}</div>
        {post.title}
      </h1>
      <div className="ui hidden divider"></div>
      <div className="row" id="post-content">
        {paragraphs()}
      </div>
    </>
  );
};

export default Post;
