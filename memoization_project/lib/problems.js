// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    } else if (n <= 1) {
        return [2, 1][n];
    } else {
        memo[n] = lucasNumberMemo(n - 2, memo) + lucasNumberMemo(n - 1, memo);
        return memo[n];
    }
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
function minChange(coins, amount, memo = {}) {
    if (amount in memo) {
        return memo[amount];
    } else if (amount === 0) {
        return 0;
    } else {
        let numCoins = [];
        coins.forEach(coin => {
            if (coin <= amount) {
                numCoins.push(minChange(coins, amount - coin, memo) + 1);
            }
        })
        memo[amount] = Math.min(...numCoins);
        return memo[amount];
    }
}

module.exports = {
    lucasNumberMemo,
    minChange
};