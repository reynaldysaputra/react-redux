import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './cake/cakeAction';
import { buyIceCream } from './iceCream/iceAction';

// Ini bisa dikatakan membuat component, dan mengirim props agar sesuai datanya

function ItemShop(props){
   return(
      <>
         <h1>~~~~~~~~~~~ Item {props.title} sebanyak {props.itemNumb} ~~~~~~~~~~~</h1>
         <button onClick={props.dispatch}>Buy {props.title}</button>
      </>
   )
}

const mapStateToProps = (state, ownProps) => {
   const items = ownProps.cake ? 
      state.cake.numbOfCake : 
      state.iceCream.numbOfIceCream ;

   return {
      title : ownProps.title,
      itemNumb : items
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   const dispatchFunction = ownProps.cake 
   ? () => dispatch(buyCake(1)) 
   : () => dispatch(buyIceCream()); 


   return {
      dispatch : dispatchFunction
   }
}  

export default connect(mapStateToProps, mapDispatchToProps)(ItemShop);