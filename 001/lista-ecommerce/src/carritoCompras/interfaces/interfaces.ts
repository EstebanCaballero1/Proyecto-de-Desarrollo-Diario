//Paso 1
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  sold: boolean; //acepta: "false" o "true";
}

export interface Cart {
  todoCount: number;
  products: Product[];
  goals: number; //num of produts that has been buyed
}