import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, addCart] = useState(initialCart);

    const handleDeleteBtn = (id) => {
        const remainingProductInCart = cart.filter(remainingProducts => remainingProducts.id !== id);
        addCart(remainingProductInCart);
        removeFromDb(id);
    }

    const clearCart = () => {
        addCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className='shopContainer'>

                <div className='orders-container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleDeleteBtn={handleDeleteBtn}

                        ></ReviewItem>)
                    }

                    {
                        cart.length === 0 && <h2>No items for review <Link to='/Shop'>Shop More</Link></h2>
                    }
                </div>

                <div className='cart-Container'>
                    <Cart clearCart={clearCart} cart={cart}>
                        {/* <Link to='/Orders'>
                            <button>Review Orders</button>
                        </Link> */}


                        <Link to='/shipping'>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>

            </div>
            {

            }

        </div>
    );
};

export default Order;