import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    } else {
        message =
            <div>
                <p><small>Thanks for giving your money</small></p>
            </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bolder ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {
                cart.length > 2
                    ? <small className='purple'>buy more..</small>
                    : <small>poor</small>
            }
            {
                message
            }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonaz</p>
            }
            {
                cart.length === 3 
            }
        </div>
    );
};

export default Cart;

/**
 * conditional rendering
 * 1. use if else to set a variable that will contain an element, component
 */