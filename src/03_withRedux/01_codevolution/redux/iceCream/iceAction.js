import { BUY_ICE_CREAM, CANCEL_BUYING_ICE_CREAM } from "./iceType"

export const buyIceCream = () => {
   return {
      type : BUY_ICE_CREAM,
      message : 'Thank you for your order :)'
   }
}

export const cancelBuyingTheIceCream = () => {
   return {
      type : CANCEL_BUYING_ICE_CREAM,
   }
}