// In-place swap
function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    return array;
}

// O(n^2) runtime... nested loops. Worst case reverse sorted array
// O(1) space as array altered in-place
function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            // Loop through elements of array, if any need to be swapped change flag
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                sorted = false;
            }
        }
    }
}

module.exports = {
    bubbleSort,
    swap
};