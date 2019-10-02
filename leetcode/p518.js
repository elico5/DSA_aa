// Coin Change 2 - https://leetcode.com/problems/coin-change-2/
// Memoization & Recursion Strategy
// 
// Not terribly efficient... uses up a lot of space (proportional to n * m, where
// n is the number of coins and m is the amount). Additionally, time complexity is
// proportional to n * n * m? (looping to find combination count for each unique combination of coins and amount)
var change = function (amount, coins, memo = {}) {
    // Only one way to make 0 chang
    if (amount === 0) return 1;
    // Generate unique key based on considered coins and amount
    const key = amount + '-' + coins;
    // Combination count hasn't been calculated for amount and set of coins
    if (!(key in memo)) {
        const coin = coins[coins.length - 1];
        let combinations = 0;
        // Take varying quantities of last coin and use solutions to combinations of rest of set
        for (let i = 0; i * coin <= amount; i++) {
            combinations += change(amount - i * coin, coins.slice(0, -1), memo);
        }
        memo[key] = combinations;
    }
    return memo[key];
};