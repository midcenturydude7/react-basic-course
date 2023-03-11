import React from "react";

function Main() {
  const [count, setCount] = React.useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="main">
      <h1 className="main-title">Total: <span>{count}</span> </h1>
      <div className="button-container">
        <button className="main-button" onClick={handleIncrement}>
          +
        </button>
        <button className="main-button" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Main;
