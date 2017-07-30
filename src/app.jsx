import {createStore} from 'redux';

// STEP 3 : Define Reducers 
const reducer = (state = [], action) => {
    
    switch(action.type) {
        case 'POST_BOOK' :  return state = action.payload;
        break;
    }

    return state;
}

// STEP 1 : Create the store
const store = createStore(reducer);

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // capture the price 
    console.log('Current price of second book is : ', store.getState()[1].price);    
});

//  STEP 2 : Create and Dispatch Actions 

// Dispatching an object similar to a database record 
// In real applications, there is generally  an array of objects in the payload
store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1001,
        title: 'Some Boook',
        description: 'A great demo book',
        price: 33.33
    },
    {
        id: 1002,
        title: 'Some Other Boook',
        description: 'A second great demo book',
        price: 13.33
    }
]});