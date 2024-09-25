import { useState } from "react";
import cart from "../assets/cart.svg";

const CartWidget = ({ count, setCount }) => {
  return (
    <>
      <div style={{ float: "right", color: "white", padding: 5 }}>
        ({count})
      </div>
      <img src={cart} alt="Cart" style={{ width: 40, float: "right" }} />
    </>
  );
};

export default CartWidget;
