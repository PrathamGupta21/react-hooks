import React, { useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const tick = () => {
    setCount(count + 1);
  };
  return <div>{count}</div>;
}

export default IntervalHookCounter;
