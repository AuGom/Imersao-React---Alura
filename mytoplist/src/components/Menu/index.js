import React from "react";

import "./Menu.css";

import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Felix Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
