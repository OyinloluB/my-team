import React from "react";
import { useHistory } from "react-router";
import "./button.scss";

const Button = ({ text, type, route }) => {
  const history = useHistory();

  return (
    <div>
      <button
        className={`${type}`}
        onClick={() => route && history.push(`${route}`)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
