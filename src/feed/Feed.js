import React from 'react';
import { useState, useEffect } from 'react';

import Post from './Post';

const HOST = "http://localhost:8080";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      console.log("onreadystatechange");
      if (req.readyState !== XMLHttpRequest.DONE)
        return;
      if (req.status !== 200)
        return;
      console.log("Got response");
      setPosts(req.response);
    }
    req.open("GET", `${HOST}/api/posts`);
    req.responseType = 'json';
    req.send();
    return () => {
      req.abort();
    }
  }, []);

  return (
    <>
      <div className="ui main text container">
        <div className="ui header">Feed</div>
        <div className="ui relaxed divided list">
          {posts.map(post => (
            <Post title={post.title} content={post.body} key={post._id} />
          ))}
        </div>
      </div>
    </>)
}

