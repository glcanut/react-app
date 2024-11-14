import React from "react";
import styles from "../styles/navbar.module.css";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : "";
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : "";
            }}
            to={"/category/romance"}
          >
            Romance
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : "";
            }}
            to="/category/fantasy"
          >
            Fantasy
          </NavLink>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
