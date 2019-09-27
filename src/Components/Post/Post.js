import React from "react";

import "./styles.css";

import Avatar from "../../assets/profile.jpg";

function Post({ post }) {
  return (
    <li>
      <div className="author">
        <img src={Avatar} alt="Avatar" />
        <div className="describe">
          <h1>{post.author.name}</h1>
          <span>{post.date}</span>
        </div>
      </div>
      <p>{post.content}</p>
    </li>
  );
}

export default Post;
