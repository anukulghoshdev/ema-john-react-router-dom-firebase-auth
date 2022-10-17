import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // console.log(props);
    //    console.log(props.product);
    // const {handleAddToCart, product} = props; //product={}
    
    // const { name, img, seller, price, ratings } = props.product; // {}, {}, {}...
    const { name, img, seller, price, ratings } = product; // {}, {}, {}...
    // console.log(name);

   

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h1 className='productName'>{name}</h1>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            
            <button className='btn-addCart' onClick={()=>handleAddToCart(product)}> 
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;