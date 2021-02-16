import React from 'react';
import { Provider } from 'react-redux';
import { cakeStore } from './redux/cakeStore';
import CakeApp from './cakeApp';

function AppsCodevolution() {
   return(
      <Provider store={cakeStore}>
         <CakeApp/>
      </Provider>
   )
}

export default AppsCodevolution;