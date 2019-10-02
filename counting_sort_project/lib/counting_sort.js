// Runtime O(n)... one loop to fill counters, one loop to empty counters
// Space O(m) where m is the maximum number in your array
// 
// Uses the array's inherent sorting of indices
function countingSort(arr, max) {
    const fill = [];
    // Initialize counters/table to count occurences of each number
    const counters = Array(max + 1).fill(0);
    // Increment index if index is present as a number in input array
    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]] += 1;
    }
    // Empty out each index of counters
    for (let j = 0; j < counters.length; j++) {
        while (counters[j] > 0) {
            fill.push(j);
            counters[j]--;
        }
    }
    return fill;
}

module.exports = {
    countingSort
};