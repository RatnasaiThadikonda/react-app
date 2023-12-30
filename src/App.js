// App.js

import React, { useState } from "react";
import "./App.css"; // Import your styles if needed


function App() {

  const [data, setData] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
  });

  const changeHandler =e =>{
    setData({...data, [e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data )
  }

  const { username, password , email , confirmPassword } = data;
  return (
    <div >
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input  value={username} name="username" type="text" onChange={changeHandler} /> <br/>
          <input  value={email} name="email" type="email" onChange={changeHandler} /> <br/>
          <input value={password} name="password" type="password" onChange={changeHandler} /> <br/>
          <input value={confirmPassword} name="confirmPassword" type="password" onChange={changeHandler} /> <br/>
          <input type="submit" name="submit" />
        </form>
      </center>

    </div>
  );
}

export default App;
