import React from 'react';
import './Product.css';
const Product = ({name,image,price}) => {
  return (
    <div className='product-main'>
      <div className='card'>
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>{price}</p>
      <button>Edit</button>
      <button>Delete</button>
      </div>
    </div>
  )
}
export default Product;