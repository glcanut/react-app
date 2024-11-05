import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, NavLink, Row } from "react-bootstrap";
import endPurchase from "../services/endPurchase";
import { Cart as CartContext } from "../context/CartProvider";
import styles from "../styles/checkout.module.css";

const Checkout = () => {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState(0);
  const [inputEmail, setInputEmail] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleEscapeModal = (e) => {
      if (e.key === "Escape") {
        setModalVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscapeModal);

    return () => {
      window.removeEventListener("keydown", handleEscapeModal);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputName(inputName);
    setInputEmail(inputEmail);
    setInputPhone(inputPhone);
    setModalVisible(true);
  };

  const finishOrder = () => {
    endPurchase(cart, inputName, inputEmail, inputPhone);
    setModalVisible(false);
  };

  return (
    <>
      <div className="formContainer">
        <h1>Checkout</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="First name"
                type="text"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" type="text" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="555-555-555"
              type="phone"
              value={inputPhone}
              onChange={(event) => setInputPhone(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
            />
          </Form.Group>
        </Form>
        <div>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
      {modalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h1>Order created successfully</h1>
            <Button onClick={finishOrder}>OK</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
