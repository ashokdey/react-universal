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
export function updateCart(_id, units) {
    return {
        type: 'UPDATE_CART',
        payload: {
            _id,
            units
        }
    }
}
