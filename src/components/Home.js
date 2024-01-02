import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {
    const [auth , setAuth] = useState(false);
    if(auth){
        return <Navigate  to='/dashboard' />
    }
  return (
    <center>
    <div>Home</div>
    <button onClick={()=> setAuth(true)}>LOGIN</button>
    </center>

  )
}

export default Home