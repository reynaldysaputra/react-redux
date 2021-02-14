const redux = require('@reduxjs/toolkit');
const initialState = {
   numOfCakes : 10,
   numOfIceCream : 20
};

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICE_CREAM'

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

function cakeReducer(state=initialState, action) {
   switch(action.type) {
      case BUY_CAKE : return {
         numOfCakes : state.numOfCakes - 1
      }
      default : return state
   }
}

function iceCreamReducer(state=initialState, action) {
   switch(action.type) {
      case BUY_ICECREAM : return {
         numOfIceCream : state.numOfIceCream - 1
      }
      default : return state
   }
}

const createStore = redux.createStore;
const store = createStore(iceCreamReducer);

console.log('initial state : ', store.getState());

const unsubscribe = store.subscribe(() => {   
   console.log(store.getState()); 
});

store.dispatch(buyIceCream());  // ini dicatat
store.dispatch(buyIceCream());  // ini dicatat 
store.dispatch(buyIceCream());  // ini dicatat

unsubscribe();  // fungsi dari unsubscribe aplikasi kami tidak mencatat apa pun dari dispatch terakhir

store.dispatch(buyIceCream());  // ini tidak dicatat setelah unsubscribe di taruh diatas
