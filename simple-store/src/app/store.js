import {createStore, combineReducers} from 'redux';
import {cartReducer} from '../features/cart/cartSlice.js';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js';
import {inventoryReducer} from '../features/inventory/inventorySlice.js';
import {searchTermReducer} from '../features/searchTerm/searchTermSlice.js';

const reducers = combineReducers({
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    searchTerm: searchTermReducer,
})

export const store = createStore(reducers)