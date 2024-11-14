import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import endPurchase from "../services/endPurchase";
import { Cart as CartContext } from "../context/CartProvider";
import styles from "../styles/checkout.module.css";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState(0);
  const [inputEmail, setInputEmail] = useState("");
  const [orderid, setOrderId] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [modalErrorVisible, setModalErrorVisible] = useState(false);

  //validation form
  const [validated, setValidated] = useState(false);

  const { cart, totalCost } = useContext(CartContext);

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

  const handleSubmit = async (event) => {
    if (
      inputName !== "" &&
      inputLastName !== "" &&
      inputPhone !== "" &&
      inputEmail !== ""
    ) {
      event.preventDefault();
      // setInputName(inputName);
      // setInputEmail(inputEmail);
      // setInputPhone(inputPhone);
      const orderGenerated = await endPurchase(
        cart,
        inputName,
        inputEmail,
        inputPhone,
        totalCost
      );
      // ).then(({ id }) => setOrderId(id));
      console.log(orderGenerated);
      setOrderId(orderGenerated);
      setModalVisible(true);
    } else {
      event.preventDefault();
      setModalErrorVisible(true);
    }
  };

  const finishOrder = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="formContainer">
        <h1>Checkout</h1>
        <Form noValidate validated={validated}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="First name"
                type="text"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                type="text"
                value={inputLastName}
                onChange={(event) => setInputLastName(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="555-555-555"
              type="phone"
              value={inputPhone}
              onChange={(event) => setInputPhone(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a email.
            </Form.Control.Feedback>
          </Form.Group>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {modalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h1>Order created successfully</h1>
            <span>Order number: {orderid}</span>
            <Button onClick={finishOrder}>
              <NavLink to={"/"} className="buttonStyle">
                OK
              </NavLink>
            </Button>
          </div>
        </div>
      )}
      {modalErrorVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h1>Please complete all the forms</h1>
            <Button onClick={() => setModalErrorVisible(false)}>OK</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
