import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, img, price, ratings } = props.product;
    const { hanldleAddToCartClick } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>Name:{name}</p>
            <p>price:{price}</p>
            <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <div>
                <button onClick={()=>props.hanldleAddToCartClick(props.product)} className='btn-cart'><p>Add To Cart <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></p></button>
            </div>
        </div>
    );
};

export default Product;