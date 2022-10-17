import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleDeleteBtn }) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-Item'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p className='product-name'>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleDeleteBtn(id)} className='delete-btn'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItem;


{/* <div className='review-item'>
    <div>
        <img src={img} alt="" />
    </div>
    <div className="review-details-container">
        <div className="review-details">
            <p>{name}</p>
            <p><small>Price: ${price}</small></p>
            <p><small>Shipping: ${shipping}</small></p>
            <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-container">
            <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    </div>
</div> */}