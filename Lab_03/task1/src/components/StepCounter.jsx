import { useState } from "react"

function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue)
  const [history, setHistory] = useState([])
  const [operationCount, setOperationCount] = useState(0)

  const updateCount = (newValue) => {
    setCount(newValue)
    setHistory(prev => [...prev, newValue])
    setOperationCount(prev => prev + 1)
  }

  const increment = () => updateCount(count + step)
  const decrement = () => updateCount(count - step)

  const reset = () => {
    setCount(initialValue)
    setHistory([])
    setOperationCount(0)
  }

  return (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <p>Total operations: {operationCount}</p>
      <p>Last values:</p>
      <ul>
        {history.slice(-5).map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  )
}

export default StepCounter