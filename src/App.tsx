import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Erik Svanes</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
