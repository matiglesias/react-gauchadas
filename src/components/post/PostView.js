import React, { useState } from 'react';
import Post from './Post';
import Comments from './Comments';
import DeleteRestoreBtn from './DeleteRestoreBtn';

const PostView = ({ postID }) => {
  const [isDeleted, setIsDeleted] = useState(false)

  return (
    <div className="ui grid">
      <div className="row" style={{ paddingTop: "5rem" }}>
        <div className="three wide column">
        </div>
        <div className="ui text container ten wide column" style={{ padding: "0" }}>
          <Post postID={postID} />
        </div>
        <div className="three wide column">
          <div style={{ textAlign: "right" }}>
            <DeleteRestoreBtn isDeleted={isDeleted} setIsDeleted={setIsDeleted} postID={postID} />
          </div>
        </div>
      </div >
      <div className="row">
        <div className="ui text container ten wide column" style={{ padding: "0" }}>
          <Comments postID={postID} canComment={!isDeleted} />
        </div>
      </div>
    </div >
  );
};

export default PostView;