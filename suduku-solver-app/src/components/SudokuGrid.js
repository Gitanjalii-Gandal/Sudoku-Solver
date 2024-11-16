import React from "react";
import "./SudokuGrid.css";
const SudokuGrid = ({ grid, onChange }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <input
              key={colIndex}
              type="number"
              min="1"
              max="9"
              value={value || ""}
              onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
              className="cell"
              disabled={value !== 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
