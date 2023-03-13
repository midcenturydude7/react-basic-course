import React from "react";

function useCounter() {
  const [count, setCount] = React.useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(0);
  }

  return { count, resetCount, handleIncrement, handleDecrement };
}

export default useCounter;
