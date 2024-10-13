import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer count={count} setCount={setCount} />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemDetailContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {/* <ItemListContainer count={count} setCount={setCount} /> */}
    </BrowserRouter>
  );
}

export default App;
