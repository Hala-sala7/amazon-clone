import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useAuth } from '../Context/GlobalState';
import './CheckoutProduct.css';

const CheckoutkProduct = ({ id, image, title, price, rating, hiddenbutton }) => {
  const { dispatch } = useAuth();

  // Function to remove an item from the basket
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct-left'>
        <img className='checkoutProduct-image' src={image} alt={title} />
      </div>

      <div className='checkoutProduct-right'>
        <p className='checkoutProduct-title'>{title}</p>
        
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong> {/* Added price formatting */}
        </p>
        
        <div className='checkoutProduct-rating'>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#ffd700'
            isHalf={true}
            edit={false}
          />
        </div>

        {/* Conditional rendering of the button */}
        {!hiddenbutton && (
          <button 
            onClick={removeFromBasket} 
            className='checkoutProduct-removeBtn'
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutkProduct;
