// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
function stepper(nums) {
    const table = Array(nums.length).fill(false);
    table[table.length - 1] = true;
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = 1; j <= nums[i]; j++) {
            if (table[i + j]) {
                table[i] = true;
                break;
            }
        }
    }
    return table[0];
}

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
function maxNonAdjacentSum(nums) {
    if (nums.length === 0 ) return 0;
    const table = Array(nums.length).fill(0);
    table[0] = nums[0];
    table[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        table[i] = Math.max(nums[i] + table[i - 2], table[i - 1])
    }
    return table[nums.length - 1];
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
function minChange(coins, amount) {
    const table = Array(amount + 1).fill(Infinity);
    table[0] = 0;
    coins.forEach(coin => {
        for (let i = coin; i <= amount; i++) {
            const count = 1 + table[i - coin];
            if (count < table[i]) table[i] = count;
        }
    })
    return table[amount];
}

module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};