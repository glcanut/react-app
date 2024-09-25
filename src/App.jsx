import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar count={count} setCount={setCount} />
      <ItemListContainer greeting=" Este es un mensaje.. " />
    </>
  );
}

export default App;
