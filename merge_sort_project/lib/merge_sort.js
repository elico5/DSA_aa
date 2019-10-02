// Merge two sorted arrays into one
// Runtime O(m + n) where m is the length of array1 and n is the length of array2
function merge(array1, array2) {
    const fill = []
    while (array1.length && array2.length) {
        array1[0] < array2[0] ? fill.push(array1.shift()) : fill.push(array2.shift());
    }
    return fill.concat(array1, array2);
}

// Runtime O(n * log(n))...
// Recursive calls are made log(n) times until base cases are hit
    // Array continually halved to length 1 or 0
// Combined sum of array elements is n at each recursive level
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = array.length / 2;
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}

module.exports = {
    merge,
    mergeSort
};