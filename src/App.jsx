import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar count={count} setCount={setCount} />
      <ItemListContainer count={count} setCount={setCount} />
    </>
  );
}

export default App;
