import React, { useState } from "react";
import SudokuGrid from "./components/SudokuGrid";
import Controls from "./components/Controls";
import { solveSudoku } from "./components/Solver";
import { isGridValid } from "./utils/validation";
import "./App.css";

const App = () => {
 
  const initialGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [message, setMessage] = useState("");

  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? parseInt(value) || 0 : c))
    );
    setGrid(newGrid);
  };

  const handleValidate = () => {
    setMessage(isGridValid(grid) ? "Valid Sudoku!" : "Invalid Sudoku!");
  };

  const handleSolve = () => {
    if (isGridValid(grid)) {
      const solution = solveSudoku([...grid.map((row) => [...row])]);
      if (solution) {
        setGrid(solution);
        setMessage("Sudoku Solved!");
      } else {
        setMessage("No solution exists!");
      }
    } else {
      setMessage("Invalid Sudoku!");
    }
  };

  const handleReset = () => {
    setGrid(initialGrid);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} onChange={handleChange} />
      <Controls
        onValidate={handleValidate}
        onSolve={handleSolve}
        onReset={handleReset}
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
