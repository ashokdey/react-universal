'use strict';

// Add to cart
export function addToCart(book) {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}
// remove from cart 
export function removeFromCart(cart) {
    return {
        type: 'DELETE_ITEM',
        payload: cart
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
