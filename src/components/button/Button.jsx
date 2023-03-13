import React from "react";

function Button({ count, action, title }) {
  return (
    <button className="main-button" onClick={action}>
      {title}
    </button>
  );
}

export default Button;
