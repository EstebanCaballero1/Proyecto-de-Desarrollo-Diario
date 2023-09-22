//Paso 2
import { Cart, Product } from "../interfaces/interfaces";

type ProductAction =
  | { type: 'addProduct', payload: Product }
  | { type: 'toggleProduct', payload: { id: string } };

export const productReducer = (state: Cart, action: ProductAction): Cart => {

  switch (action.type) {
    case 'addProduct':
      return {
        ...state,
        products: [...state.products, action.payload]
      }

    case 'toggleProduct':
      return {
        ...state,
        products: state.products.map(({ ...product }) => {
          if (product.id === action.payload.id) {
            product.sold = !product.sold;
          }
          return product;
        })
      }
    default:
      return state;
  }
}