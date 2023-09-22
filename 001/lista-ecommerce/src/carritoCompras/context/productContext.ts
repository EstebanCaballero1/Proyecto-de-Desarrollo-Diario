// productContext.tsx
import { createContext } from "react";
import { Cart } from "../interfaces/interfaces";

export type ProductContextProps = {
  cart: Cart
  toggleProduct: (id: string) => void;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);