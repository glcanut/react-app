import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="card-item">
        <img src={item.image} alt="Card Image" />
        <span className="developer">{item.genre}</span>
        <h3>{item.title}</h3>
        <span>${item.price}</span>
        <NavLink to={`/detail/${item.id}`}>
          <Button variant="primary" className="m-2">
            Details
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default Item;
