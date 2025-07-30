import ProductsPage from "@/components/Pages/ProductsPage/ProductsPage";
import { CartProvider } from "@/context/CartShop";

export default function ProductsAll() {
  return (
    <CartProvider>
      <div>
        <ProductsPage />
      </div>
    </CartProvider>
  );
}
