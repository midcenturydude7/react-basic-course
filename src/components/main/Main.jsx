import React from "react";
import Button from "../button/Button";

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

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="main">
      <h1 className="main-title">
        Total: <span>{count}</span>{" "}
      </h1>
      <div className="button-container">
        <Button title={"+"} action={handleIncrement} />
        <Button title={"-"} action={handleDecrement} />
        <Button title={"Reset"} action={resetCount} />
      </div>
    </div>
  );
}

export default Main;
