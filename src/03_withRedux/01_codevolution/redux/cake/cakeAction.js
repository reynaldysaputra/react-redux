import { BUY_CAKE, CANCEL_BUYING_CAKE } from "./cakeType"

export function buyCake(number) {   
   return {
      type : BUY_CAKE,
      payload : number,
      message : 'Thank you for your order :)'
   }
}

export function cancelBuyingTheCake() {
   return {
      type : CANCEL_BUYING_CAKE,
   }
}