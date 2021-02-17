import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './userAction';

function UserApp({dataUser, fetchUser}){
   return(
      <>
         <button onClick={() => fetchUser()}>TAMPILKAN DATA USER</button>
         {dataUser.loading === true && <h1>Loading...</h1>}
         <ul>
            {
               dataUser.data !== undefined && 
               dataUser.data.map(item => (
                  <li key={item.id}>{item.username}</li>
               ))
            }
         </ul>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      dataUser : state.user
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchUser : () => dispatch(fetchUser())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserApp);