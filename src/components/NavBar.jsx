import React from "react";
import "../styles/navbar.css";
import CartWidget from "./cartWidget";

const NavBar = ({ count, setCount }) => {
  return (
    <ul>
      <li>
        <a className="active" href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <CartWidget count setCount />
    </ul>
  );
};

export default NavBar;
