import {getCurrencySymbol, calculatePrice} from '../../utilities/utilities.js';
import {React, useEffect} from 'react';
import {loadData} from './inventorySlice.js';
import {addItem} from '../cart/cartSlice.js';

export const Inventory = (props) => {
    const {inventory, currencyFilter, dispatch} = props;
    const onMount =()=> {
        dispatch(loadData())
    }
    useEffect(onMount, [dispatch]);

    const onClickHandler = (inventoryItem)=>{
        dispatch(addItem(inventoryItem));
    }
    if (inventory.length === 0) {
        return <p> Sorry, no products are currently available... </p>;
    }

    const createInventoryItem= (inventoryItem) => {
        const {name, price, img} = inventoryItem;
        const displayPrice = calculatePrice(price, currencyFilter);
        return (
        <li key={name} className='item'>
            <img src={img} alt={' '}/>
            <h3>{name}</h3>
            <h3 className="price">
            {getCurrencySymbol(currencyFilter)}
            {displayPrice.toFixed(2)}{currencyFilter}
            </h3>
            <button onClick={()=>onClickHandler(inventoryItem)} className='add-to-cart-button'>
                Add to Cart
            </button>
        </li>
    )
    }
    
    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;
    
}