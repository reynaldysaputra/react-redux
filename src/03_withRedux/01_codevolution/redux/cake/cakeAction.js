import { BUY_CAKE, CANCEL_BUYING_CAKE } from "./cakeType"

export function buyCake() {
   return {
      type : BUY_CAKE,
      message : 'Thank you for your order :)'
   }
}

export function cancelBuyingTheCake() {
   return {
      type : CANCEL_BUYING_CAKE,
   }
}