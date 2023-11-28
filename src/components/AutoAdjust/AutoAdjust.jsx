
import PropTypes from "prop-types";
import React from "react";
import "../css/AutoAdjust.css";

export const AutoAdjust = ({ className, divClassName, text = "Auto caption" }) => {
  return (
    <div className={`auto-adjust ${className}`}>
      <div className={`auto-caption ${divClassName}`}>{text}</div>
    </div>
  );
};

AutoAdjust.propTypes = {
  text: PropTypes.string,
};
