// Minimum Path Sum - https://leetcode.com/problems/minimum-path-sum/
// Tabulation Strategy
// 
// O(m * n) runtime where m is the number of rows and n is the number of columns...
// The algorithm touches each square once
// O(1) space, as the input grid is altered in place to use represent the table data structure
var minPathSum = function (grid) {
    const m = grid.length; // Number of rows
    const n = grid[0].length; // Number of columns
    // Solve top edge
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    // Solve left edge
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    // At each square we take the minimum sums at square above or left
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};