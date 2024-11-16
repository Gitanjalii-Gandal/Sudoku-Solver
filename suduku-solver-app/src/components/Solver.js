export const solveSudoku = (grid) => {
  const isValid = (grid, row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
      const subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const subCol = 3 * Math.floor(col / 3) + (i % 3);
      if (grid[subRow][subCol] === num) return false;
    }
    return true;
  };

  const solve = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solve(grid)) return true;
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const copyGrid = (g) => g.map((row) => [...row]);

  if (solve(grid)) {
    return copyGrid(grid);
  }

  return null;
};
