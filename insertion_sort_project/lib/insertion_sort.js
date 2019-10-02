// Runtime O(n^2)... nested loops
// O(1) space... in-place array mutation
function insertionSort(arr) {
    // Iterate through each element, save reference
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        // Iterate through array left of element, push up one if greater than our reference element
        for (var j = i - 1; j >= 0 && arr[j] > element; j--) {
            arr[j + 1] = arr[j]
        }
        // Push reference element to last swapped index
        arr[j + 1] = element;
    }
    return arr;
}

module.exports = {
    insertionSort
};