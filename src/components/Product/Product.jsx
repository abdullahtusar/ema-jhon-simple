import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, ratings, seller, price } = props.product;
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
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;