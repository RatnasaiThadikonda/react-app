// App.js

import React , {useEffect, useState} from 'react';
import './App.css'; // Import your styles if needed
import Display from './display'; // Import other components as needed

function App() {
  // const name = "Ratna";
  const [name , setName] = useState(1);
  const [val , setVal] = useState("");
  useEffect(()=> console.log(name+1), [name]);
  const handler = e=>{
    setVal(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='red'>Hello {name}</h1>
        <center>
        <Display name={name} />
        <button onClick = {()=> setName(name+1) }>
          Click
        </button>
        <input value={val} onChange={(event) => [console.log(event), setVal(event.target.value)]} type="text" />


        <p>{val}</p>

        </center>
      

      </header>
    </div>
  );
}

export default App;
