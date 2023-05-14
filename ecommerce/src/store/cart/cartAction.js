const AddToCart = "AddToCart";
const RemoveFromCart = "RemoveFromCart";
const AddToCart_Saga = "AddToCart_Saga"
const RemoveFromCart_Saga = "RemoveToCart_Saga"


const addToCart = (payload) => {
    console.log({payload})
    return {type: AddToCart, payload}
}
  
const removeFromCart = (items) => ({type: RemoveFromCart,payload:items});

const addToCart_Saga = (payload) => {
    console.log("testtttt")
    return {type: AddToCart_Saga, payload}
};
const removeFromCart_Saga = (payload) => ({type: RemoveFromCart_Saga,payload});

export {
    AddToCart,
    RemoveFromCart,
    addToCart,
    removeFromCart,
    AddToCart_Saga,
    RemoveFromCart_Saga,
    addToCart_Saga,
    removeFromCart_Saga
}