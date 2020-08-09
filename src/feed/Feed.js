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
      <button type="button" name="refresh">Refresh</button>
      {POSTS_TEST.map(post => (
        <Post title={post.title} content={post.content} />
      ))}
    </>
  </div>
}

function Post(props) {
  return <div>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </div>
}

export default Feed;