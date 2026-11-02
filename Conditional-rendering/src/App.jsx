import React from 'react'
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isFlag, setIsFlag] = useState(false);

  useEffect(() => {
    console.log("hii");
  }, [count]);
  return (
    <div>
      {/* <LearnEvent /> */}
      <h1>Today we are learning form</h1>
      <h1>{count}</h1>
      <h1>{isFlag && "Squad 168 and 169"}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setIsFlag(!isFlag)}>Toggle</button>

    </div>
  )
}

export default App
