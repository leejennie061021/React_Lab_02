import { useState } from 'react'
import "./App.css"

function App() {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      <button onClick={() => setHighlight(!highlight)}>
        Toggle Highlight
      </button>
      <p className={ishighlighted ? "highlight" : ""}>
        Это текст для подсветки
      </p>
    </div>
  );
}

export default App;