import React from "react";

function Main() {
  const [count, setCount] = React.useState(0);

  function handleChange() {
    setCount(count + 1);
  }
  return (
    <div className="main">
      <h1 className="main-title">Total: {count} </h1>
      <button className="main-button" onClick={handleChange}>
        Counter
      </button>
    </div>
  );
}

export default Main;
