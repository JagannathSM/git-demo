import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Clean up the interval on component unmount
    // return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <div>Count: {count}</div>;
}

export default TimerComponent;