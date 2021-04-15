import React from 'react';
import {calculateTotal, getCurrencySymbol} from '../../utilities/utilities.js';
import {changeItemQuantity} from './cartSlice.js';

export const Cart = (props)=>{
    const {cart, dispatch, currencyFilter} = props;

    const onInputChangeHandler = (name, input)=>{
        const newQuantity = Number(input);
        if (input ===''){
            return;
        }
        dispatch(changeItemQuantity(name, newQuantity))
    }
    const cartElements= Object.keys(cart).map(cartItem=>createCartItem(cartItem))

    const createCartItem = (name)=>{
        const item = cart[name];
        if(item.quantity===0){
            return;
        }
        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className='item-quantity'
                    value={item.quantity}
                    onChange={event=>onInputChangeHandler(name, event.target.value)}
                >
                    {[...Array(100).keys()].map((_, index)=>(
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}                    
                </select>
            </li>
        )
    }
    const total = calculateTotal(cart, currencyFilter)
    return (
        <div id='cart-container'>
            <ul id='cart-items'>{cartElements}</ul>
            <h3 className='total'>Total: {' '}
            <span className='total-value'>
                {getCurrencySymbol(currencyFilter)}{total}{currencyFilter}
            </span>
            </h3>
        </div>
    )
    
}