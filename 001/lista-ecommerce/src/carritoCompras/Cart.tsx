import ProductProvider from "./context/productProvider"
import { ProductList } from "./components/productList"

export const Cart = () => {

  return (
    <ProductProvider>
      <h1>Productos:</h1>
      <ProductList />
    </ProductProvider>
  )
}