import redux from '@reduxjs/toolkit';

const createStore = redux.createStore;

// State
const initialState = {
   loading : false,
   data : [],
   error : ''
}

// Action
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCSES = 'FETCH_USER_SUCCSES';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const fetchUserRequest = () => {
   return {
      type : FETCH_USER_REQUEST
   }
}

const fetchUserSuccses = (value) => {
   return {
      type : fetchUserSuccses,
      payload : {
         dataUser : value
      }
   }
}

const fetchUserError = (value) => {
   return {
      type : fetchUserError,
      payload : {
         err : value
      }
   }
}

// Reducer
function ReducerAsync(state = initialState, action) {
   switch(action.type) {
      case FETCH_USER_REQUEST : return {
         ...state,
         loading : true
      }
      case FETCH_USER_SUCCSES : return {
         loading : false,
         data : action.payload.dataUser,
         error : ''
      }
      case FETCH_USER_ERROR : return {
         loading : false,
         data : [],
         error : action.payload.error
      }
   }
}

const store = createStore(ReducerAsync);