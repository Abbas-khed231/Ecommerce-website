const AddToCart = "AddToCart";
const RemoveFromCart = "RemoveFromCart";


const addToCart = (payload) => ({type: AddToCart, payload});
const removeFromCart = () => ({type: RemoveFromCart});

export {
    AddToCart,
    RemoveFromCart,
    addToCart,
    removeFromCart
}