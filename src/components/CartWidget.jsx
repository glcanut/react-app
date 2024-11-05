import { useContext, useState } from "react";
import cart from "../assets/cart.svg";
import { Cart as CartContext } from "../context/CartProvider";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <div style={{ float: "right", color: "white", padding: 5 }}>
        ({totalQuantity()})
      </div>
      <img src={cart} alt="Cart" style={{ width: 40, float: "right" }} />
    </>
  );
};

export default CartWidget;
