import { AddToCart, RemoveFromCart } from "./cartSaga";

const initialState = {
    Cart_items : [],
    cartLength: 0
}

const cartReducer = (state = initialState, {type,payload} )=> {
    console.log("payload : ",payload);
    switch (type) {
        case AddToCart:
            let cartItems = state.Cart_items;
            let cartLength = state.cartLength;
            cartItems = [ ...cartItems,payload];
            cartLength = cartItems.length;
            return {...state, Cart_items: cartItems, cartLength };
        case RemoveFromCart :
            return{...state, Cart_items: state.Cart_items.filter(payload)};
        default:
            return state;
    }
}

export default cartReducer;