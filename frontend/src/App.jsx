import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    // axios.get('http://localhost:3000/api/jokes')
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
      <h1>FullStack - Frontend and Backend</h1>
      <h4>JOKES: {jokes.length}</h4>
      {
        jokes.map((joke, idx)=>(
            <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
            </div>
       ))
      }
    </>
  )
}

export default App
