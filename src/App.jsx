import { useState } from "react"
import { useFetch } from './hooks/useFetch'

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('App')

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')


  if(loading) return <h5>Loading...</h5>
  if(error) return <h5>{error}</h5>

  return(
    <div> 
      <h5 className="font-bold text-3xl">UseEffect</h5>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}
      </button>  

      <ul>
        {
          data.map((user) => (<li key={user.id}> {user.name}</li>))
        }
      </ul>

    </div>
  )
}

export default App