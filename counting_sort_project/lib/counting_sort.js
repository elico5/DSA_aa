function countingSort(arr, max) {
    const fill = [];
    const counters = Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]] += 1;
    }
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