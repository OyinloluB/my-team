import React from "react";
import "./button.module.scss";

const Button = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default Button;
