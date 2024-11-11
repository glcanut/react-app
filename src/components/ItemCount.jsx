import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, addCart }) => {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount((count) => count + 1);
  };

  const removeProduct = () => {
    setCount((count) => count - 1);
  };

  const buttonState = count > 0;

  return (
    <div>
      <div className="">
        <Button
          variant="outline-info"
          className="m-2"
          onClick={removeProduct}
          disabled={count === 0}
        >
          -
        </Button>
        <span className="">{count}</span>
        <Button
          variant="outline-info"
          className="m-2"
          onClick={addProduct}
          disabled={count === stock}
        >
          +
        </Button>
      </div>

      <Button
        className="m-2"
        variant="primary"
        disabled={!buttonState}
        onClick={() => addCart(count)}
      >
        Add
      </Button>
    </div>
  );
};

export default ItemCount;
