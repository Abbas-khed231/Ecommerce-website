const AddToCart = "AddToCart";
const AddToCart_Saga = "AddToCart_Saga"
const RemoveFromCart = "RemoveFromCart";
const RemoveFromCart_Saga = "RemoveToCart_Saga"


const addToCart = (payload) => ({type: AddToCart, payload});
const removeFromCart = () => ({type: RemoveFromCart});
const addToCart_Saga = (payload) => {
    console.log("testtttt")
    return {type: AddToCart_Saga, payload}
};
const removeFromCart_Saga = () => ({type: RemoveFromCart_Saga});

export {
    AddToCart,
    RemoveFromCart,
    AddToCart_Saga,
    RemoveFromCart_Saga,
    addToCart,
    removeFromCart,
    addToCart_Saga,
    removeFromCart_Saga
}