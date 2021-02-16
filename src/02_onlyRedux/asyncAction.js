import redux from '@reduxjs/toolkit';
import { default as ReduxThunk } from 'redux-thunk';
import axios from 'axios';

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

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
      type : FETCH_USER_SUCCSES,
      payload : {
         dataUser : value
      }
   }
}

const fetchUserError = (value) => {
   return {
      type : FETCH_USER_ERROR,
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
         error : action.payload.err
      }
      default : return state
   }
}

const fetchUsers = () => {
   return (dispatch) => {
      dispatch(fetchUserRequest());
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => {
            const data = res.data.map(item => item.name);
            dispatch(fetchUserSuccses(data));
         })
         .catch(err => {
            dispatch(fetchUserError(err));
         })
   }
}

const store = createStore(ReducerAsync , applyMiddleware(ReduxThunk.default));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
