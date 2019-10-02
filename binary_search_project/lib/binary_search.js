// Both styles have runtime of O(log(n))...
// Since input arrays are sorted, no need to touch each element
// Now, recursive calls continually halve the input
// Worst case - target isn't in the array

function binarySearch(array, target) {
    // If array is empty target cannot be present
    if (!array.length) return false;
    const mid = Math.floor(array.length / 2);
    if (target > array[mid]) {
        return binarySearch(array.slice(mid + 1), target);
    } else if (target < array[mid]) {
        return binarySearch(array.slice(0, mid), target);
    } else { 
        // Target is equal to pivot element
        return true;
    }
}

// Similar code engine, just need to account for offset indices when searching in right side
function binarySearchIndex(array, target) {
    // Return -1 if target is not found
    if (!array.length) return -1;
    const mid = Math.floor(array.length / 2);
    if (target > array[mid]) {
        const result = binarySearchIndex(array.slice(mid + 1), target);
        // Handle offset indices
        return result < 0 ? result: mid + result + 1;
    } else if (target < array[mid]) {
        return binarySearchIndex(array.slice(0, mid), target);
    } else {
        // Return index where target was found
        return mid;
    }
}

module.exports = {
    binarySearch,
    binarySearchIndex
};