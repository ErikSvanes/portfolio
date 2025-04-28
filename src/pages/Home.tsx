import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid green" }}>
      <h1>Erik Svanes</h1>
      <div>
        <button onClick={() => setCount((count) => count + 2)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
};

export default Home;
