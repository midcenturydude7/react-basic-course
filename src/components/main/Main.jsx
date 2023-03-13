import React from "react";
import Button from "../button/Button";
import useCounter from "../../hooks/useCounter";

function Main() {
  // Custom hook that handles business logic for counter/reset btns
  const { count, resetCount, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="main">
      <h1 className="main-title">
        Total: <span>{count}</span>{" "}
      </h1>
      <div className="button-container">
        <Button text={"+"} action={handleIncrement} />
        <Button text={"-"} action={handleDecrement} />
        <Button text={"Reset"} action={resetCount} />
      </div>
    </div>
  );
}

export default Main;
