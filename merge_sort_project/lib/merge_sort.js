function merge(array1, array2) {
    const fill = []
    while (array1.length && array2.length) {
        array1[0] < array2[0] ? fill.push(array1.shift()) : fill.push(array2.shift());
    }
    return fill.concat(array1, array2);
}

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