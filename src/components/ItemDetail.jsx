import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Cart } from "../context/CartProvider";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(Cart);
  const [itemCountVisibility, setItemCountVisibility] = useState(true);

  const handleCart = (quantity) => {
    setItemCountVisibility(false);
    addCart(product, quantity);
  };

  return (
    <>
      <div className="formContainer">
        <Card className="card-item" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            {itemCountVisibility ? (
              <ItemCount addCart={handleCart} stock={product.stock} />
            ) : (
              <Button variant="primary" className="m-2">
                <NavLink to={"/cart"} className="buttonStyle">
                  Go cart
                </NavLink>
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
