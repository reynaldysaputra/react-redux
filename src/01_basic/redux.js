import React, { Fragment, useState } from 'react';

// Inisialisasi Redux
const redux = require('@reduxjs/toolkit');
// Initial State
const initialState = {
   name : '',
   age : 1
}
// Buat Store Redux
const myStore = redux.createStore(Reducer);
// Buat Reducer
function Reducer(state = initialState, action) {
   if(action.type == 'ADD_DATA') {
      return {
         ...state, 
         age : state.age + 1
      }
   }
   return state;
}

function BasicRedux() {
   const [message, setMessage] = useState('');

   // Suscribe / mendapatkan notifikasi dari store, ketika store berubah
   myStore.subscribe(() => {
      setMessage(myStore.getState().age);
   });

   return(
      <Fragment>
         {message && <p>Heyy Kamu mendapatkan notifikasi dari truuits : {message}</p>}
         <button onClick={() => myStore.dispatch({type : 'ADD_DATA'})}>Click Dispatch</button>
      </Fragment>
   )
}

export default BasicRedux;