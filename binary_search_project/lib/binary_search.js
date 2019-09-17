function binarySearch(array, target) {
    if (!array.length) return false;
    const mid = Math.floor(array.length / 2);
    if (target > array[mid]) {
        return binarySearch(array.slice(mid + 1), target);
    } else if (target < array[mid]) {
        return binarySearch(array.slice(0, mid), target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;
    const mid = Math.floor(array.length / 2);
    if (target > array[mid]) {
        const result = binarySearchIndex(array.slice(mid + 1), target);
        return result < 0 ? result: mid + result + 1;
    } else if (target < array[mid]) {
        return binarySearchIndex(array.slice(0, mid), target);
    } else {
        return mid;
    }
}

module.exports = {
    binarySearch,
    binarySearchIndex
};