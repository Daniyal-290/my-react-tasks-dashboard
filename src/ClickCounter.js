import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  const handleClick = () => {
    setCount(count + 1); // Increase count by 1 on each click
  };

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid lightgray', borderRadius: '5px' }}>
      <h2>Task 2: Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;