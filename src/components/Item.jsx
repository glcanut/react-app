import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  return (
    <>
      <div className="card-item">
        <img src={item.image} alt="Card Image" />
        <span className="developer">Developer</span>
        <h3>{item.title}</h3>
        <span>{item.price}</span>
        <ItemCount stock={10} initial={1}></ItemCount>
      </div>
    </>
  );
};

export default Item;
