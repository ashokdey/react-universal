'use strict';

export default function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state, 
                cart: action.payload,
                totalAmount: calculateTotal(action.payload).amount,
                totalQuantity: calculateTotal(action.payload).quantity
            }
        break;

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
           

            return {
                ...state,
                cart: action.payload,
                totalAmount: calculateTotal(action.payload).amount,
                totalQuantity: calculateTotal(action.payload).quantity                
            }
        break;
    }

    return state;
}


// calculate total  amount 
export function calculateTotal(cart) {
    
    if(cart.length > 0) {
        // calculate total amount 
        const totalAmount = cart.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

        //calculate total no of quantities
        const totalQuantity = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0); 
        return {
            amount: totalAmount.toFixed(2),
            quantity: totalQuantity
        }
    }
    else {
        return {
            amount: 0.00,
            quantity: 0
        }
    }
}