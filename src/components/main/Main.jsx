import React from "react";
import useCounter from "../../hooks/useCounter";

function Main() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="main">
      <h1 className="main-title">
        Total: <span>{count}</span>{" "}
      </h1>
      <div className="button-container">
        <button className="main-button" onClick={handleIncrement}>
          +
        </button>
        <button
          className={count > 0 ? "main-button" : "main-button-disabled"}
          onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Main;
