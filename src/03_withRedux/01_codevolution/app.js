import React from 'react';
import { Provider } from 'react-redux';
import { cakeStore } from './store';
import CakeAppHoc from './redux/cake/cakeAppHoc';
import CakeAppHook from './redux/cake/cakeAppHook';
import CakeAppRequest from './redux/cake/cakeRequestBuy';
import IceCreamAppHoc from './redux/iceCream/iceAppHoc';
import IceCreamAppHook from './redux/iceCream/iceCreamHook';
import ItemProps from './redux/itemContainer';

function AppsCodevolution() {
   return(
      <Provider store={cakeStore}>
         <ItemProps cake={true} title={'Cake'}/>

         <CakeAppHoc/>
         <CakeAppHook/><br/><br/>

         <CakeAppRequest/>

         <ItemProps iceCream={true} title={'Ice Cream'}/>
         <IceCreamAppHoc/>
         <IceCreamAppHook/>         
      </Provider>
   )
}

export default AppsCodevolution;