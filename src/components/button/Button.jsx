import React from "react";
import PropTypes from "prop-types";

function Button({ className, action, text }) {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.className,
  action: PropTypes.action,
  text: PropTypes.text,
};

export default Button;
