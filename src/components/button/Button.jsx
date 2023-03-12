import React from "react";

function Button({ count, setCount }) {
  <div className="button-container">
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>;
}

export default Button;
