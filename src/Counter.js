import React, { useState } from 'react';
import './style.css';

function Counter() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

const Increment =()=>{
  setCount(count+1);
  setRed(!isRed);
}


  return (
    <div>
      <h1 className= {isRed ? "red" : ""}>Change my color</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
