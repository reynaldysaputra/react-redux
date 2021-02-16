import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { cancelBuyingTheCake } from './redux/cakeAction';

function CakeAppHook() {
   const numbOfCake = useSelector(state => state.numbOfCake);
   const dispatch = useDispatch();

   return(
      <>
         <h1>HOOK Numb of cake - {numbOfCake}</h1>
         <button onClick={() => dispatch(cancelBuyingTheCake())}>Buy Cake</button>
      </>
   )
}

export default CakeAppHook;