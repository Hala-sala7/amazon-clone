import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useAuth } from '../Context/GlobalState';
import "./Product.css"

const Product = ({ id, image, title, price, rating }) => {
  const {dispatch, basket} =useAuth()
  const addtobasket = ()=> {
     dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
     })
  }
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='product-rating'>
        <ReactStars
          count={5}           
          value={rating}       
          size={24}             
          activeColor="#ffd700" 
          isHalf={true}        
          edit={false}          
        />
      </div>
      <img src={image} alt={title} className='product-image' />
      <button onClick={addtobasket} >Add to basket</button>
    </div>
  );
};

export default Product;
