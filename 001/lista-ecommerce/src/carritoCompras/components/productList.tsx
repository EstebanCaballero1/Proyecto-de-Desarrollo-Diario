import { ProductItem } from "./productItem";
import { useProduct } from "../hooks/useProducts";
import "./productList.css"

export const ProductList = () => {
  const { products } = useProduct();

  return (
    <ul className="cuadrantes">
      {
        products.map((product) => (
          <ProductItem//ver como limitar la cantidad de elementos por linea, parece que hay que crear un atributo nuevo
            key={product.id}
            product={product}
          />
        ))
      }
    </ul>
  )
}