const ItemListContainer = ({ greeting, count, setCount }) => {
  const handleClick = () => {
    setCount((count = count + 1));
  };

  return (
    <>
      <div>{greeting}</div>
      <button onClick={handleClick}>Agregar al carrito</button>
    </>
  );
};

export default ItemListContainer;
