import {
  addDoc,
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const endPurchase = async (
  cart,
  inputName,
  inputEmail,
  inputPhone,
  totalCost
) => {
  const productsToUpdateRefs = [];

  // Create an array of references to all the products in cart.
  for (const cartProduct of cart) {
    const productRef = doc(db, "products", cartProduct.id);
    productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id });
  }

  // Create a ref for orders collection
  const orderCollectionRef = collection(db, "orders");

  try {
    const order = await runTransaction(db, async (transaction) => {
      //Create an auxiliar array for stocks to be updated
      const stocksUpdated = [];
      //   const cartTotal = 0;

      //1. Check valid stock of every product in cart
      for (const productToUpdate of productsToUpdateRefs) {
        const { ref } = productToUpdate;
        const product = await transaction.get(ref);
        if (!product.exists()) {
          throw "Product does not exist!";
        }

        //Product in cart in order to know the quantity in cart
        const productInCart = cart.find(
          (cartElement) => cartElement.id === product.id
        );

        //Check the resulting stock
        const resultStock = product.data().stock - productInCart.quantity;

        //update total
        // cartTotal = cartTotal + product.data().price * productInCart.quantity;

        if (resultStock < 0)
          throw `Product: ${
            product.data().title
          }, doesn't have enough stock. Stock: ${
            product.data().stock
          }, quantity added to cart: ${productInCart.quantity}.`;

        //Add the result stock to the auxiliary array
        stocksUpdated.push({
          productId: product.id,
          stock: resultStock,
        });
      }

      //2. Update the stock of the products (writing procedures must be after reading procedures)
      for (const product of productsToUpdateRefs) {
        const { ref, id } = product;
        const stockUpdated = stocksUpdated.find(
          (stock) => stock.productId === id
        );
        transaction.update(ref, {
          stock: stockUpdated.stock,
        });
      }

      //3. Creates the order, no id is given
      const orderData = {
        products: { ...cart },
        user: {
          name: inputName,
          email: inputEmail,
          phone: inputPhone,
        },
        tiemstamp: serverTimestamp(),
        total: toString(totalCost),
      };
      const orderAdded = await addDoc(orderCollectionRef, orderData);
      return orderAdded.id;
    });
  } catch (e) {
    //Any throw in try block will be caught
    console.error(e);
  }
};

export default endPurchase;
