import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './cakeAction';

function CakeAppHoc(props){
   return(
      <>
         {console.log(props)}
         <h1>HOC Numb of cake - {props.numbOfCakes}</h1>
         <button onClick={props.buyCake}>Buy Cake</button>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      numbOfCakes : state.cake.numbOfCake
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      buyCake : () => dispatch(buyCake())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeAppHoc);