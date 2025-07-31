"use client";

import { createContext, useState, useEffect } from "react";
import { getProductData } from "@/data/ProductData";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotlaAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProduct));
  }, [cartProduct]);

  function getProductQuantity(id) {
    const quantity = cartProduct.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addItemToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProduct([...cartProduct, { id: id, quantity: 1 }]);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProduct((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotlaAmount() {
    let totalAmount = 0;

    cartProduct.forEach((item) => {
      const productData = getProductData(item.id);
      totalAmount += productData.pris * item.quantity;
    });

    return totalAmount;
  }

  const ContextValue = {
    items: cartProduct,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotlaAmount,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
