import React from 'react';

export default function (props) {
  return <div className="item">
    <div className="header">{props.title}</div>
    <div className="description">{props.content}</div>
  </div>
}
