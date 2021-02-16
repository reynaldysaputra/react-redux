import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { cancelBuyingTheIceCream } from './iceAction';

function IceCreamAppHook() {
   const numbOfIceCream = useSelector(state => state.iceCream.numbOfIceCream);
   const dispatch = useDispatch();

   return(
      <>
         <h1>HOOK Numb of Ice Cream - {numbOfIceCream}</h1>
         <button onClick={() => dispatch(cancelBuyingTheIceCream())}>Cancel Ice Cream</button>
      </>
   )
}

export default IceCreamAppHook;