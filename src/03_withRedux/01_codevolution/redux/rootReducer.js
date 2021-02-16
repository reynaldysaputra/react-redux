import { combineReducers } from "redux";
import { ReducerCake } from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceReducer";

export const rootReducer = combineReducers({
   cake : ReducerCake,
   iceCream : iceCreamReducer
})