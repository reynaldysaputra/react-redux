import { cakeInitialState } from "../../initalState";
import { BUY_CAKE, CANCEL_BUYING_CAKE } from "./cakeType";

export function ReducerCake(state = cakeInitialState, action) {
   switch(action.type) {
      case BUY_CAKE : return {
         ...state, 
         numbOfCake : state.numbOfCake === 0 ? state.numbOfCake : state.numbOfCake - action.payload
      }
      case CANCEL_BUYING_CAKE : return {
         ...state, 
         numbOfCake : state.numbOfCake === 10 ? state.numbOfCake : state.numbOfCake + 1
      }
      default : return state
   }
}