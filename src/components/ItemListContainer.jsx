import products from "../assets/mock_data.json";
import Item from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = ({ count, setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <ItemList products={products} count={count} />
      {/* <button onClick={handleClick}>Agregar al carrito</button> */}
    </>
  );
};

export default ItemListContainer;
