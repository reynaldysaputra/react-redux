import React from 'react';
import { Provider } from 'react-redux';
import { cakeStore } from './redux/cakeStore';
import CakeAppHoc from './cakeAppHoc';
import CakeAppHook from './cakeAppHook';

function AppsCodevolution() {
   return(
      <Provider store={cakeStore}>
         <CakeAppHoc/>
         <CakeAppHook/>
      </Provider>
   )
}

export default AppsCodevolution;