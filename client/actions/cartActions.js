'use strict';
// import  axios to make requests
import axios from 'axios';

// get cart 
export function getCart() {
  return function(dispatch) {
    axios.get('/api/cart')
      .then((response) => dispatch({
        type:'GET_CART',
        payload: response.data
      }))
      .catch((err) => dispatch({
        type: 'GET_CART_REJECTED',
        payload: err.message
      }));
  }
} 

// Add to cart
export function addToCart(cart) {
  return function(dispatch) {
    axios.post('/api/cart', cart)
      .then((response) => dispatch({
        type: 'ADD_TO_CART',
        payload: response.data
      }))
      .catch((err) => dispatch({
        type: 'ADD_TO_CART_REJECTED',
        payload: err.message
      }));
  }
}
// remove from cart 
export function removeFromCart(cart) {
  return function(dispatch) {
    axios.post('/api/cart', cart)
      .then((response) => dispatch({
        type: 'DELETE_ITEM',
        payload: response.data
      }))
      .catch((err) => dispatch({
        type: 'DELETE_ITEM_REJECTED',
        payload: err.message
      }));
  }
}

// update cart 
export function updateCart(_id, unit, cartArrayFromComponent) {
   /**
   * create a copy of the cart items 
   * find the index of the item in the cart using the given id 
   * if found in the cart, increase the quantity by given units
   * remove the old item from the cart array and then add new updated item 
   */

  const cartReplica = cartArrayFromComponent;
  const indexOfItem = cartReplica.findIndex((item) => item._id === _id);

  const bookWithUpdatedQunatity = {
    ...cartReplica[indexOfItem],
    quantity: cartReplica[indexOfItem].quantity + unit
  }
  
  let updatedCart = [...cartReplica.slice(0, indexOfItem), bookWithUpdatedQunatity, ...cartReplica.slice(indexOfItem + 1)];

  return {
    type: 'UPDATE_CART',
    payload: updatedCart
  }
}
