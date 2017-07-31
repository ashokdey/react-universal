'use strict';

export default function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {cart: [...state, ...action.payload]}
        break;

        case 'DELETE_ITEM':
            return {cart: [...state, ...action.payload]}
        break;

        case 'UPDATE_CART':
            /**
             * create a copy of the cart items 
             * find the index of the item in the cart using the given id 
             * if found in the cart, increase the quantity by given units
             * remove the old item from the cart array and then add new updated item 
             */

            const cartReplica = [...state.cart];
            const indexOfItem = cartReplica.findIndex((item) => item._id === action.payload._id);

            const bookWithUpdatedQunatity = {
                ...cartReplica[indexOfItem],
                quantity: cartReplica[indexOfItem].quantity + action.payload.units
            }
            
            let updatedCart = [...cartReplica.slice(0, indexOfItem), bookWithUpdatedQunatity, ...cartReplica.slice(indexOfItem + 1)];

            return {
                ...state,
                cart: updatedCart
            }
        break;
    }

    return state;
}