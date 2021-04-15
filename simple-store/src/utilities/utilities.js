export const calculatePrice = (price, currency)=>{
    switch(currency){
        case 'EUR':
            return price * 0.86;
        case 'CAD':
            return price * 1.33;
        default:
            return price
    }
}

export const calculateTotal = (cart, currency)=>{
    let totalUSD = 0;
    Object.keys(cart).forEach(itemPosition=>{
        totalUSD += cart[itemPosition].price * cart[itemPosition].quantity;
    })
    return calculatePrice(totalUSD, currency).toFixed(2)
}

export const getCurrencySymbol = (currencyFilter)=>{
    switch(currencyFilter){
        case 'USD':
            return '$';
        case 'EUR': 
            return '€';
        case 'CAD':
            return '$';
        default:
            return '';
    }
}