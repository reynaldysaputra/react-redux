import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from './iceAction';

function IceCreamAppHoc(props){
   return(
      <>
         {console.log(props)}
         <h1>HOC Numb of Ice Cream - {props.numbOfIceCream}</h1>
         <button onClick={props.buyIceCream}>Buy Ice Cream</button>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      numbOfIceCream : state.iceCream.numbOfIceCream
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      buyIceCream : () => dispatch(buyIceCream())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamAppHoc);