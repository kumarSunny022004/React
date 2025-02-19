import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Up</button>{" "}
    <button onClick={()=>setCount(count-1)}>Down</button>{" "}
    <button onClick={()=>setCount(0)}>reset</button>{" "}
    <p>Footer: {count}</p>
    </div>
    </>
  )
}

export default App
