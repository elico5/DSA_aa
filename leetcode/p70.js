// Climbing Stairs - https://leetcode.com/problems/climbing-stairs/
// Two-Pointer/Tabulation Strategy
// 
// O(n) runtime where n is the number of stairs to climb...
// Algorithm really resemblant of Fibonacci sequence
// O(1) space, as the table array just hold two points no matter the size of input
var climbStairs = function (n) {
    // Initialize pointers - 1 way to climb 0 steps, 1 way to climb 1 step
    const table = [1, 1];
    if (n < 2) {
        return table[n];
    } else {
        // 1 step from n-1 combinations, 2 steps from n-2 combinations
        for (let i = 2; i <= n; i++) {
            [table[0], table[1]] = [table[1], table[0] + table[1]];
        }
        return table[1];
    }
};