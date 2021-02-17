import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from './cakeAction';

function CakeAppRequest(props){
   const [number, setNumber] = useState(1); // request number 

   return(
      <>
         <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
         <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CakeAppRequest);