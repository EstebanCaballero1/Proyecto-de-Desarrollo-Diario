import { useReducer } from "react"

import { ProductContext } from "./productContext"
import { Cart } from "../interfaces/interfaces"
import { productReducer } from "./productReducer"


const INITIAL: Cart = {
  todoCount: 5,
  products: [
    {
      id: "1",
      name: "Banana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdOlqwgfaHqcCxQWq-kBAaRnlsNxnoWUpZA&usqp=CAU",
      description: "Una banana cultivada en el sur de Ecuador.",
      price: 720,
      stock: 3,
      sold: false,
    },
    {
      id: "2",
      name: "Pera",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAm05dYTdRaWmgIiClGjiCkbox03ZxXGYu4g&usqp=CAU",
      description: "Una pera nacional, esta a sido cultivada en centro de Mendoza.",
      price: 800,
      stock: 7,
      sold: false,
    },
    {
      id: "3",
      name: "Racimo de uva",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ38NoThsVDo7SQylCzX7GJqV2gcPFnfuQkQ&usqp=CAU",
      description: "Un racimo de uva nacional, esta a sido cultivada en el noroeste de Mendoza.",
      price: 1500,
      stock: 3,
      sold: false,
    },
    {
      id: "4",
      name: "Piña",
      image: "https://www.editorialderiego.com/wp-content/uploads/2023/02/Pina_0122feb-scaled.jpg",
      description: "Una piña... es rica, importada de Costa Rica.",
      price: 1200,
      stock: 5,
      sold: false,
    },
    {
      id: "5",
      name: "Proteina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-1DUupShthJdJffvqWb0tgNUeRnYNqnPSQ&usqp=CAU",
      description: "Una Proteina fresca que a sido cultivada y se ha mantenido fresca durante mucho tiempo, nada mejor que una fruta dulce.",
      price: 3500,
      stock: 3,
      sold: false,
    },/*
    {
      id: "6",
      name: "asd",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-1DUupShthJdJffvqWb0tgNUeRnYNqnPSQ&usqp=CAU",
      description: "ds.",
      price: 3500,
      stock: 2,
      sold: false,
    }*/
  ],
  goals: 3, //Number of products that will be bought
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {
  //usualmente cuando se trabaja con un provider se trabaja con funciones, estados o administramos variables;

  //reducer para manejar el estado
  const [cart, dispatch] = useReducer(productReducer, INITIAL);

  const toggleProduct = (id: string) => {
    dispatch({ type: 'toggleProduct', payload: { id } })
  }

  return (
    <ProductContext.Provider value={{
      cart,
      toggleProduct
    }}>
      { /* componente hijo*/ children}
    </ProductContext.Provider>
  )
}

export default TodoProvider