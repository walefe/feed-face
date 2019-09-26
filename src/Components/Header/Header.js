import React, { Component } from "react";

import "./styles.css";

import avatar from "../../assets/avatar.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>facebook</h1>
        <div className="profile">
          <a href="">
            <h1>Meu perfil</h1>
          </a>
          <img src={avatar} alt="Avatar" />
        </div>
      </header>
    );
  }
}

export default Header;
