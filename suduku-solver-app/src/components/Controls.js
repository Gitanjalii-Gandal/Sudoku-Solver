import React from "react";
import "./Controls.css";
const Controls = ({ onValidate, onSolve, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onValidate}>Validate</button>
      <button onClick={onSolve}>Solve</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
