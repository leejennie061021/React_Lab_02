import { useState } from "react";

function StepCounter({initialValue = 0, step = 1}) {
    const [count, setCount] = useState(initiValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);

    const increment = () => {
        const newCount = count + step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setOperationCount(operationCount + 1);
    };

    const decrement = () => {
        const newCount = count - step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setOperationCount(operationCount + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
      <h2>Step Counter</h2>

      <p><strong>Current Count:</strong> {count}</p>
      <p><strong>Total Operations:</strong> {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>

      <h4>Last values:</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;