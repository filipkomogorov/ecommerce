export interface Product {
  id: number;
  name: string;
  color?: string;
  category: string[];
  onSale: boolean;
  price: number;
  image: string[];
  inStock: number;
  fastDelivery: boolean;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "White Stylish Shirt",
    color: "white",
    category: ["Shirt", "Men"],
    onSale: false,
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    ],
    inStock: 12,
    fastDelivery: true,
    rating: 5,
    description: "random",
  },
  {
    id: 2,
    color: "white",
    name: "White Stylish Shirt",
    category: ["Shirt"],
    onSale: true,
    price: 19.99,
    image: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    ],
    inStock: 12,
    fastDelivery: true,
    rating: 5,
    description: "random",
  },
];
