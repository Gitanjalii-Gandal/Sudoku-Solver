export const isGridValid = (grid) => {
  const isValidSet = (arr) => {
    const nums = arr.filter((x) => x !== 0);
    return new Set(nums).size === nums.length;
  };

  for (let i = 0; i < 9; i++) {
    const row = grid[i];
    const col = grid.map((r) => r[i]);
    const subGrid = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        subGrid.push(grid[3 * Math.floor(i / 3) + r][3 * (i % 3) + c]);
      }
    }
    if (!isValidSet(row) || !isValidSet(col) || !isValidSet(subGrid))
      return false;
  }

  return true;
};
