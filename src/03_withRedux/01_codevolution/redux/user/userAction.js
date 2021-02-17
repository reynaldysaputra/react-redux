import { 
   FETCH_USER_REQUEST, 
   FETCH_USER_SUCCSES, 
   FETCH_USER_ERROR
} from "./userType";
import axios from "axios";

export const fetchUserRequest = () => {
   return {
      type : FETCH_USER_REQUEST
   }
}

export const fetchUserSuccses = (value) => {
   return {
      type : FETCH_USER_SUCCSES,
      payload : {
         dataUser : value
      }
   }
}

export const fetchUserError = (value) => {
   return {
      type : FETCH_USER_ERROR,
      payload : {
         err : value
      }
   }
}

export const fetchUser = () => {
   return (dispatch) => {
      dispatch(fetchUserRequest());
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
            const userData = response.data;
            dispatch(fetchUserSuccses(userData));
         })
         .catch(error => {
            const err = error;
            dispatch(fetchUserError(err))
         })
   }
}