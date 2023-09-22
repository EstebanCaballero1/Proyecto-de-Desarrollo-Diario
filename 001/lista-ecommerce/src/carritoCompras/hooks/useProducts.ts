import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProduct = () => {
  const { cart, toggleProduct } = useContext(ProductContext);
  const { products } = cart;
  return {
    products: cart.products,
    pendingGoals: products.filter(product => product.sold).length,
    toggleProduct
  }
}

