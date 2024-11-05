import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "../src/styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail" element={<ItemDetailContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        {/* <ItemListContainer count={count} setCount={setCount} /> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
