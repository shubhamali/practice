import React from "react";
import Product from "./Product";
import "./Products.css";
const dummyProducts = [
  {
    name: "mobile",
    image: "https://cdn1.smartprix.com/rx-iGNlyOFEo-w1200-h1200/GNlyOFEo.jpg",
    price: 15000,
    description: "This is a new mobile app",
    quantity: 12,
  },
  {
    name: "mobile",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71geVdy6-OS._SL1500_.jpg",
    price: 20000,
    description: "This is a new mobile app",
    quantity: 12,
  },
  {
    name: "mobile",
    image:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
    price: 25000,
    description: "This is a new mobile app",
    quantity: 12,
  },
];
export const Products = () => {
  return (
    <div className="main">
      <ul>
      {dummyProducts.map((product, index) => (
        <li key={index}>
          <Product id={product.index} name={product.name} image={product.image} price={product.price} des={product.description}/>
        </li>
      ))}
      </ul>
    </div>
  );
};
export default Products;
