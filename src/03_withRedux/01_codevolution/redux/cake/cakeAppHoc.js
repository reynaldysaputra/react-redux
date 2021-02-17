import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './cakeAction';

function CakeAppHoc(props){
   return(
      <>
         <h1>HOC Numb of cake - {props.numbOfCakes}</h1>
         <button onClick={() => props.buyCake(1)}>Buy Cake</button>
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
      buyCake : (number) => dispatch(buyCake(number))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeAppHoc);