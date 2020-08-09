import React from 'react';

const POSTS_TEST = [
  {
    "title": "Título",
    "content": "Contenido"
  },
  {
    "title": "Title",
    "content": "Content"
  },
  {
    "title": "Titel",
    "content": "Inhalt"
  },
  {
    "title": "표제",
    "content": "함유량"
  }
];


export function Feed() {
  return <div>
    <>
      <button type="button" className="ui button">Refresh</button>
      <div className="ui relaxed divided list">
        <div className="content">
          {POSTS_TEST.map(post => (
            <Post title={post.title} content={post.content} key={post.content} />
          ))}
        </div>
      </div>
    </>
  </div>
}

function Post(props) {
  return <div>
    <div className="header">{props.title}</div>
    <div className="description">{props.content}</div>
  </div>
}

export default Feed;