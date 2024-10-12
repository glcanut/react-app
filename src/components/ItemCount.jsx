import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addProduct = () => {
    setCount((count) => count + 1);
  };

  const removeProduct = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={removeProduct}
          disabled={count === initial}
        >
          -
        </button>
        <span className="count-container__qty">{count}</span>
        <button
          className="count-container__button"
          onClick={addProduct}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(count)}
        disabled={stock === 0 ? true : null}
      >
        Add
      </button>
    </div>
  );
};

export default ItemCount;
