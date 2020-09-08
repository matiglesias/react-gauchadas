import React from 'react';
import moment from 'moment'

const Response = ({ response }) => {
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
        </div>
      </div>
    </div>
  )
}

export default Response;