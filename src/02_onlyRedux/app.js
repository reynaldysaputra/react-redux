import reactLogger from 'redux-logger';
import redux from '@reduxjs/toolkit';

const { logger } = reactLogger;

const createStore = redux.createStore;
const combineReducer = redux.combineReducers; // Mengkombinasi banyak fungsi reducer
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

const initialCakeState = {
   numOfCakes : 10,
};

const initialIceCreamState = {
   numOfIceCream : 20
}

const buyCake = () => {
   return {
      type : BUY_CAKE,
      info : 'Buy Cake'
   }
}

const buyIceCream= () => {
   return {
      type : BUY_ICECREAM,
      info : 'Buy Ice Cream'
   }
}

function cakeReducer(state=initialCakeState, action) {
   switch(action.type) {
      case BUY_CAKE : return {
         ...state, 
         numOfCakes : state.numOfCakes - 1
      }
      default : return state
   }
}

function iceCreamReducer(state=initialIceCreamState, action) {
   switch(action.type) {
      case BUY_ICECREAM : return {
         ...state,
         numOfIceCream : state.numOfIceCream - 1
      }
      default : return state
   }
}

let rootReducer = combineReducer({ // Membuat route kombinasi reducer
   cake : cakeReducer,
   iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('initial state    : ', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyIceCream());  // ini dicatat
store.dispatch(buyIceCream());  // ini dicatat 
store.dispatch(buyIceCream());  // ini dicatat

unsubscribe();  // fungsi dari unsubscribe aplikasi kami tidak mencatat apa pun dari dispatch terakhir

store.dispatch(buyIceCream());  // ini tidak dicatat setelah unsubscribe di taruh diatas
