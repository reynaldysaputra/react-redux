import { combineReducers } from "redux";
import { ReducerCake } from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceReducer";
import { ReducerAsync } from "./user/userReducer";

export const rootReducer = combineReducers({
   cake : ReducerCake,
   iceCream : iceCreamReducer,
   user : ReducerAsync
})