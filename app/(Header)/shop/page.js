import CartPage from "@/components/Home/header/shop/Shop";
import { CartProvider } from "@/context/CartShop";
export default function shoppage() {
  return (
    <>
      <CartProvider>
        <CartPage />
      </CartProvider>
    </>
  );
}
