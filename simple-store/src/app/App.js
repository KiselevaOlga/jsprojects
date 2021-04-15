import './App.css';
import React from 'react';
import {Inventory} from '../features/inventory/Inventory.js';
import {CurrencyFilter} from '../features/currencyFilter/CurrencyFilter.js';
import {SearchTerm} from '../features/searchTerm/SearchTerm.js';
import {Cart} from '../features/cart/Cart.js';

const App = (props) => {
  const {state, dispatch}=props;
  const visibleItems = getFilteredItems(state.inventory, state.searchTerm)
  return (
    <div>
      <CurrencyFilter 
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Inventory 
        inventory={visibleItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
        cart={state.cart}
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}
      />
    </div>
  );
}
const getFilteredItems = (items, term)=>{
  return items.filter(item=>item.name.toLowerCase().includes(term.toLowerCase()))
}
export default App;
