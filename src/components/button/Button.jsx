import React from "react";
import PropTypes from "prop-types";
function Button({ count, action, text }) {
  return (
    <button
      className={
        text === "-" && count === 0 ? "main-button-disabled" : "main-button"
      }
      onClick={action}>
      {text}
    </button>
  );
}

Button.propTypes = {
  count: PropTypes.count,
  action: PropTypes.action,
  text: PropTypes.text,
};

export default Button;
