import React from "react";

import "./styles.css";

function Comments({ comment }) {
  return (
    <div className="comment">
      <img src={comment.author.avatar} alt="Author" />
      <div className="content">
        <h1>{comment.author.name}</h1>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}

export default Comments;
