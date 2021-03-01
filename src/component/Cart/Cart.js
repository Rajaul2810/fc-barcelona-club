import React from 'react';
import Data from '../Data/Data';
import './Cart.css';
const Cart = (props) => {
    const count = props.count;
    let total =0;
    for (let i = 0; i < count.length; i++) {
        const player = count[i];
        total = total+ player.sallary;
    }
    return (
        <div className="cart">
            <h2>Player Info</h2>
            <h4>Total Selected Player: {count.length}</h4>
            {
                count.map( ct => <Data counts={ct}></Data>)
            }
            
            <h5>Total Budget: ${total}</h5>
            
        </div>
    );
};

export default Cart;