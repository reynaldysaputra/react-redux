export const BUY_CAKE = 'BUY_CAKE';
export const CANCEL_BUYING_CAKE = 'CANCEL_BUYING_CAKE';

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