import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearCart, children} = props // cart [{},{}...]
    // console.log(cart);



    let total = 0;
    let shipping = 0;
    let quantity = 0; 
     
    for(const product of cart){ // {} {}...
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping=shipping + product.shipping * product.quantity;
    }
    const tax = (total * 0.1).toFixed(2);

    const grandTotal = total+shipping+parseFloat(tax);




    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: {grandTotal? grandTotal.toFixed(2): 0}</h4>
            <button className='clear-cart-btn' onClick={clearCart}>Clear Cart</button>
            <button className='checkout-btn'>Checkout</button>
            {children}
        </div>
    );
};

export default Cart;