import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Summary in Cart</h4>
                <h4>Selected Items:{cart.length}</h4>
        </div>
    );
};

export default Cart;