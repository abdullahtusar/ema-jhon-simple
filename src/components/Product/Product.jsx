import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, ratings, seller, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <div className='main-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                </div>
                <div className='product-caption'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart <span> <FontAwesomeIcon icon={faShoppingCart} /></span> 
                </button>
        </div>
    );
};

export default Product;