import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
