# Sudoku-Solver

#Sudoku Solver WebApp

This is a web-based Sudoku Solver built using  ReactJS. The application allows users to input Sudoku values, validate the entries, and solve the puzzle using a backtracking algorithm if the entries are valid.

#Features

1.9x9 Sudoku Grid: Users can input numbers (1-9) or leave cells blank.

2.Validation: A button to validate the current Sudoku grid.

3.Solve Button: Solves the Sudoku puzzle if the entries are valid.

4.Error Handling: Displays error messages for invalid entries.

5.Sudoku Solver Algorithm: Solves the puzzle using a backtracking algorithm.

6.Bonus Features: Includes creative styling and additional features like hints.

#Project Setup
Follow the steps below to set up and run the project locally:

#Prerequisites
1.Node.js (LTS version) installed

2.npm (Node Package Manager)

#Installation
1.Download the repository

2.Navigate to the project directory
cd sudoku-solver

3.Install the dependencies
npm install

#Running the Project
To run the project locally, execute the following command:
npm start

#Sudoku Solver Algorithm
The solver uses the backtracking algorithm, which is a depth-first search method. Here's how it works:

The algorithm iterates through the grid to find empty cells.
For each empty cell, it tries placing numbers from 1 to 9.
After placing a number, it checks if the number is valid in that position by verifying:
The number does not already exist in the current row.
The number does not already exist in the current column.
The number does not already exist in the 3x3 sub-grid.
If the number is valid, it recursively proceeds to solve the next empty cell.
If a conflict is detected at any point, it backtracks by removing the last number and trying the next one.
This process continues until the puzzle is solved or determined to be unsolvable.
Validation Logic
The validation checks the following conditions for a valid Sudoku grid:

Row Validation: Each row must contain unique numbers from 1-9, with no duplicates (except for blank cells).
Column Validation: Each column must contain unique numbers from 1-9.
3x3 Sub-grid Validation: Each of the 9 sub-grids must contain unique numbers from 1-9.
The validation occurs when the user clicks the "Validate" button. If there are any issues, an error message is displayed.

#User Interface (UI) Styling
The UI is styled using CSS/Styled-components, with a focus on usability. Some key features include:

#Grid Layout: The Sudoku grid is displayed in a 9x9 grid with clickable cells for input.
Buttons: There are two buttons:
Validate: Checks the current grid for validity.
Solve: Solves the Sudoku puzzle if the entries are valid.
Error Messages: If the grid is invalid, an error message is displayed to the user.
Bonus Features
Hints: Provides the user with hints for solving the puzzle.
Theming: Creative theming to make the UI more visually appealing.

#GitHub Repository
You can access the full source code on GitHub at the following link:

GitHub Repository Link-   https://github.com/Gitanjalii-Gandal/Sudoku-Solver



