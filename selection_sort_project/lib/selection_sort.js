// In-place swap
function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    return array;
}

// Runtime O(n^2)... nested loops
// O(1) space due to in-place swaps and one pointer to minimum index
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap left most element of unsorted portion with minimum of unsorted portion
        // OR
        // "SELECT" minimum from unsorted portion and swap...
        swap(arr, i, minIndex);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};