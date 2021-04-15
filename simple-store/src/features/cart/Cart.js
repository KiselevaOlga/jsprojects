import React from 'react';
import {calculateTotal, getCurrencySymbol} from '../utilities/utilities';

export const Cart = (props)=>{
    return (
        <div id='cart-container'>
            <ul id='cart-items'>cartElements</ul>
            <h3 className='total'>Total: {' '}
            <span className='total-value'>
                {getCurrencySymbol(currencyFilter)}{total}{currencyFilter}
            </span>
            </h3>
        </div>
    )
}