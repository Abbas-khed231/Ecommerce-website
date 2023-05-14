import { AddToCart, RemoveFromCart } from "./cartAction";

const initialState = {
    Cart_items : [],
    cartLength: 0
}

const cartReducer = (state = initialState, {type,payload} )=> {
    // console.log("payload : ",payload);
    switch (type) {
        case AddToCart:
            console.log("working");
            let cartItems = state.Cart_items;    
            let cartLength = state.cartLength;
            cartItems = [ ...cartItems,payload];
            cartLength = cartItems.length;
            return {...state, Cart_items: cartItems, cartLength };
        case RemoveFromCart :
            return{...state, Cart_items: state.Cart_items.filter((items) => items.id !== items.id) };
        default:
            return state;
    }
}

export default cartReducer;