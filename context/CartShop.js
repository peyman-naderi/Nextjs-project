"use client";

import { createContext, useState } from "react";
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
  // برای ذخیره کردن محصول در استیت
  const [cartProduct, setCartProduct] = useState([]);

  // برای نمایش و فهمیدن تعداد یک محصول
  function getProductQuantity(id) {
    const quantity = cartProduct.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // برای افزودن محصول به صفحه خرید
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

  // یک محصول خاص از صفحه خرید حذف شود
  function deleteFromCart(id) {
    setCartProduct((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  // این تابع فقط یک واحد از محصول کم میکند
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

  // این تابع قیمت نهایی را محاسبه میکند
  function getTotlaAmount() {
    let totalAmount = 0;

    cartProduct.map((item) => {
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
