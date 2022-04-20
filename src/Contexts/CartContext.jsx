import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const indexOfProduct = cart.findIndex((item) => product.sku === item.sku);
    if (indexOfProduct !== -1) {
      const newCart = [...cart];
      newCart[indexOfProduct].amountProduct += product.amountProduct;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (RemoveItem) => {
    setCart(cart.filter((product) => product.sku !== RemoveItem));
  };

  const emptyCart = () => {
    setCart([]);
    alert("The cart was emptied")};

  const CartCheckout = () => {
      setCart([]);
      if (cart.length === 0) {
        alert("Your cart is empty")
      } else { alert("Thank you for your purchase")};
    }


  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, CartCheckout, emptyCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};


export default CartContextProvider;
