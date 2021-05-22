import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty, 
        },
    });
    // agr page dobara refresh ya re render hota hai to cart ki items dobara 0 na ho to hm usko local storage main rakh rahe hai and uske bad store ki initial state main usko rakh rahe hai
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}