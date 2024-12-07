import React from 'react';
import { useAuth } from '../Context/GlobalState';
import CheckoutProduct from "./CheckoutProduct"; // Fixed the typo in the import statement
import checkoutImg from "../images/checkoutAd.jpg";
import Subtotal from './Subtotal';
import "./Checkout.css";

const Checkout = () => {
    const { user, basket } = useAuth();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-ad' src={checkoutImg} alt="Advertisement" />
                <h3 className='checkout-greeting'>Hello, {user?.email}</h3>
                <h2 className='checkout-title'>Your Shopping Basket</h2>

                {/* Conditional rendering based on basket length */}
                {basket.length === 0 ? (
                    <p className='empty-basket-message'>Your basket is empty</p>
                ) : (
                    basket.map((item) => (
                        <CheckoutProduct
                            key={item.id} // Use unique value like 'id'
                            id={item.id}
                            title={item.title} // Ensure title is used
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                )}
            </div>
            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
