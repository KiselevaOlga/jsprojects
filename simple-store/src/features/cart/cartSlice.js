
const initialCart = {}
export const cartReducer = (cart=initialCart, action)=>{
    switch(action.type){
        case 'cart/addItem':
            const {name, price}=action.payload;
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            const newItem = {price, quantity};
            return {
                ...cart,
                [name]: newItem
            }
        case 'cart/removeItem':
            return;
        case 'cart/changeItemQuantity':
            return;
        default:
            return cart
    }
}