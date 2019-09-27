import React, { Component } from "react";

import Post from "../Post/Post";

import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpeg"
        },
        date: "26 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpeg"
        },
        date: "26 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <Post key={post} post={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
