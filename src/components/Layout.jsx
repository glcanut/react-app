import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar count={count} setCount={setCount} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
