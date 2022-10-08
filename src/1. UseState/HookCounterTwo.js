import React, { useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count: {count}</p>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
}

export default HookCounterTwo;
