import React, { Component } from "react";

import Post from "../Post/Post";
import Comment from "../Comments/Comments";

import "./styles.css";
import Avatar from "../../assets/profile.jpg";
import Octocat from "../../assets/octocat.png";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: Avatar
        },
        date: "26 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Octocat
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: Octocat
        },
        date: "26 Set 2019",
        content:
          "Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da RocketSeat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação pra trocarmos ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: Avatar
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    const posts = this.state.posts;
    return (
      <ul>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
