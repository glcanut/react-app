import mockProducts from "../assets/mock_data.json";
import Item from "./Item";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ count, setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    let productsFiltered;
    if (categoryId) {
      productsFiltered = mockProducts.filter(
        (product) => product.genre === categoryId
      );
    } else {
      productsFiltered = mockProducts;
    }
    setProducts(productsFiltered);
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} count={count} />
      {/* <button onClick={handleClick}>Agregar al carrito</button> */}
    </>
  );
};

export default ItemListContainer;
