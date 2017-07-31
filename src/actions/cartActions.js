'use strict';

// Add to cart
export function addToCart(book) {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

export function removeFromCart(cart) {
    return {
        type: 'DELETE_ITEM',
        payload: cart
    }
}