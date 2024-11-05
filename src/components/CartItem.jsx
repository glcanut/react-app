import React, { useContext } from "react";
import styles from "../styles/cartItem.module.css";
import { Button } from "react-bootstrap";
import { Cart as CartContext } from "../context/CartProvider";

const CartItem = ({ item }) => {
  const { deleteProduct } = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      <img src={item.image} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>Qty: {item.quantity}</p>
      <Button onClick={() => deleteProduct(item)}>Delete</Button>
    </div>
  );
};

export default CartItem;
