import { 
   FETCH_USER_REQUEST, 
   FETCH_USER_SUCCSES, 
   FETCH_USER_ERROR
} from "./userType";
import { initialStateUser } from "../../initalState";

export function ReducerAsync(state = initialStateUser, action) {
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