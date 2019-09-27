import React from "react";

import Comment from "../Comments/Comments";

import "./styles.css";

function Post({ post }) {
  return (
    <li>
      <div className="author">
        <img src={post.author.avatar} alt="Avatar" />
        <div className="describe">
          <h1>{post.author.name}</h1>
          <span>{post.date}</span>
        </div>
      </div>
      <p>{post.content}</p>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </li>
  );
}

export default Post;
