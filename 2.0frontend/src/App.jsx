import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[products, setProducts] = useState([])
  const[error, setError] = useState(false) //for handling errors 
  const [loading, setLoading] = useState(false) //for handling loading 
  const [search, setSearch] = useState('')

  useEffect(()=> {
    const controller = new AbortController() // to cancel old requests

    ;(async ()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products' , {
          signal: controller.signal //cancel all old request which hit in api but send in catch
        })
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        if(axios.isCancel(err)){
          console.log("Request cancelled", err.message)
          return
        }
        setError(true)
        setLoading(false)
      }
    })()

    //clean up method
    return () => {
      controller.abort() // cancel the request
    }

  },[search])

  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading....</h1>
  // }  OR ---->
  

  return (
    <>
       <h1>CODE WITH API</h1>
       <input type="text" placeholder='Search Products...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       />

        {/* //conditional rendering */}
        { loading && <h1>Loading....</h1>}
        { error && <h1>Something went wrong</h1>}

       <h2>Total Products : {products.length} </h2>
    </>
  )
}

export default App
