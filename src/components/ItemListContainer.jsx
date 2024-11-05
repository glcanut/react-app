import { db } from "../firebase/config";
import Item from "./Item";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ count, setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let productsFiltered = [];
        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("genre", "==", categoryId)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        }
        setProducts(productsFiltered);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} count={count} />
    </>
  );
};

export default ItemListContainer;
