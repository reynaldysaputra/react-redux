import { cakeInitialState } from "../initalState";
import { BUY_CAKE } from "./cakeAction";

export function ReducerCake(state = cakeInitialState, action) {
   switch(action.type) {
      case BUY_CAKE : return {
         ...state, 
         numbOfCake : state.numbOfCake === 0 ? state.numbOfCake : state.numbOfCake - 1
      }
      default : return state
   }
}