'use strict';

export default function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, 
                cart: action.payload,
                totalAmount: calculateTotal(action.payload).amount,
                totalQuantity: calculateTotal(action.payload).quantity
            }
        break;

        case 'DELETE_ITEM':
            return {
                ...state,
                cart: action.payload,
                totalAmount: calculateTotal(action.payload).amount,
                totalQuantity: calculateTotal(action.payload).quantity                
            }
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
                cart: updatedCart,
                totalAmount: calculateTotal(updatedCart).amount,
                totalQuantity: calculateTotal(updatedCart).quantity                
            }
        break;
    }

    return state;
}


// calculate total  amount 
export function calculateTotal(cart) {
    // calculate total amount 
    const totalAmount = cart.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

    //calculate total no of quantities
    const totalQuantity = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0); 
    return {
        amount: totalAmount.toFixed(2),
        quantity: totalQuantity
    }
}