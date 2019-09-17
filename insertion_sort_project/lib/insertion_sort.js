function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        for (var j = i - 1; j >= 0  && arr[j] > element; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = element;
    }
    return arr;
}

module.exports = {
    insertionSort
};