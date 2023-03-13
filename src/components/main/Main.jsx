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
        <Button className="main-button" text={"+"} action={handleIncrement} />
        <Button
          className={count > 0 ? "main-button" : "main-button-disabled"}
          text={"-"}
          action={handleDecrement}
        />
        <Button
          className={count > 0 ? "main-button" : "main-button-disabled"}
          text={"Reset"}
          action={resetCount}
        />
      </div>
    </div>
  );
}

export default Main;
