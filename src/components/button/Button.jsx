import React from "react";

function Button({ count, action, title }) {
  function checkClassName() {
    let className = "";
    if (title === "-" || "Reset" && count === 0) {
      className = "main-button-disabled";
    }
  }

  return (
    <button
      className={title === "+" ? "main-button" : "main-button-disabled"}
      onClick={action}>
      {title}
    </button>
  );
}

export default Button;
