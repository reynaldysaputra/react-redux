import { iceCreamInitialState } from "../../initalState";
import { BUY_ICE_CREAM, CANCEL_BUYING_ICE_CREAM } from "./iceType";

export function iceCreamReducer(state = iceCreamInitialState, action){
   switch(action.type) {
      case BUY_ICE_CREAM : return {
         ...state, 
         numbOfIceCream : state.numbOfIceCream === 0 ? state.numbOfIceCream : state.numbOfIceCream - 1
      }
      case CANCEL_BUYING_ICE_CREAM : return {
         ...state, 
         numbOfIceCream : state.numbOfIceCream === 20 ? state.numbOfIceCream : state.numbOfIceCream + 1
      }
      default : return state
   }
}