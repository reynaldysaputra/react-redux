import React from 'react';
import { Provider } from 'react-redux';
import { cakeStore } from './store';
import CakeAppHoc from './redux/cake/cakeAppHoc';
import CakeAppHook from './redux/cake/cakeAppHook';
import IceCreamAppHoc from './redux/iceCream/iceAppHoc';
import IceCreamAppHook from './redux/iceCream/iceCreamHook';

function AppsCodevolution() {
   return(
      <Provider store={cakeStore}>
         <CakeAppHoc/>
         <CakeAppHook/>

         <IceCreamAppHoc/>
         <IceCreamAppHook/>
      </Provider>
   )
}

export default AppsCodevolution;