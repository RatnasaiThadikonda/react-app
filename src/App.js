import axios from 'axios'
import React , {useEffect, useState} from 'react'

const App = () => {
  const [data , setData] = useState([])
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      res => 
      setData(res.data)
    )

  } , [])
  return (
    <div>
      {data.map((item ,index) => <li key = {index}>{item.title}</li> )}
      </div>

  )
}

export default App