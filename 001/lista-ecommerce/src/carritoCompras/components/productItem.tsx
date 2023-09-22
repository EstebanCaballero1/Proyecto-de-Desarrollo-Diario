import { Product } from "../interfaces/interfaces"
import { useProduct } from "../hooks/useProducts"
import "./productItem.css"

interface props {
  product: Product
}

export const ProductItem = ({ product }: props) => {

  const { toggleProduct } = useProduct();
  return (
    <li
      className={`product-item ${product.sold ? "sold" : ""}`}
      onClick={() => {
        toggleProduct(product.id);
      }}
    >
      <img className="product-image" src={product.image} ></img>
      <div className="product-title">{product.name}</div>
      <div className="product-info">{product.description}</div>
      <div className="product-price">{product.price}</div>
    </li>
  )
}