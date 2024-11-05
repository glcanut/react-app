import React, { useContext } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "../styles/cart.module.css";
import { NavLink } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import endPurchase from "../services/endPurchase";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart, totalCost } = useContext(CartContext);

  const handlePurchase = () => {
    const order = {
      buyer: {
        name: "jhon",
        lastName: "due",
        email: "@gmail.com",
      },
      products: cart,
      total: 145, //reemplazar por un metodo (reduce, useMemo)
      timestamp: serverTimestamp(),
    }(async () => {
      try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className={styles.container}>
      {cart.length ? (
        <>
          {cart.map((cartItem) => {
            return <CartItem item={cartItem} key={cartItem.id} />;
          })}
          <div>
            <span>Total: ${totalCost()}</span>
          </div>
          {/* <Button onClick={() => endPurchase(cart)}>End purchase</Button> */}
          <Button className="m-2">
            <NavLink to={"/checkout"} className="buttonStyle">
              End purchase
            </NavLink>
          </Button>
        </>
      ) : (
        <>
          <h1>No hay productos en el cart</h1>
          <NavLink to={"/"}>Home</NavLink>
        </>
      )}
    </div>
  );
};

export default Cart;
