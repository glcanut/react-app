import { createContext, useState } from "react";

export const Cart = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addCart = (product, productQuantity) => {
    const productInCart = isInCart(product.id);
    let cartUpdated = [...cart];
    if (productInCart) {
      cartUpdated = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + productQuantity,
            total: quantity * cartProduct.price,
          };
        }
        return cartProduct;
      });
    } else {
      cartUpdated.push({ ...product, quantity: productQuantity });
    }

    setCart(cartUpdated);
  };

  const isInCart = (productId) => {
    return cart.some((cartProduct) => cartProduct.id === productId);
  };

  const deleteProduct = (product) => {
    const newCartUpdated = cart.filter(
      (cartProduct) => cartProduct.id !== product.id
    );
    setCart(newCartUpdated);
  };

  const totalCost = () => {
    const cost = cart.reduce(
      (acumulador, cartProduct) =>
        acumulador + cartProduct.price * cartProduct.quantity,
      0
    );
    return cost;
  };
  const totalQuantity = () => {
    return cart.reduce(
      (acumulador, cartProduct) => acumulador + cartProduct.quantity,
      0
    );
  };

  return (
    <Cart.Provider
      value={{
        cart,
        addCart,
        quantity,
        deleteProduct,
        totalCost,
        totalQuantity,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;
