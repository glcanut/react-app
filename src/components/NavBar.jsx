import React from "react";
import styles from "../styles/navbar.module.css";
import CartWidget from "./cartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ count }) => {
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
            to={"/products"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : "";
            }}
            to="/category/fiction"
          >
            Fiction
          </NavLink>
        </li>
        <CartWidget count={count} />
      </ul>
    </nav>
  );
};

export default NavBar;
