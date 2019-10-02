// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length) return true;
    const lChildIdx = 2 * idx;
    const rChildIdx = 2 * idx + 1;
    const lChild = array[lChildIdx] || -Infinity;
    const rChild = array[rChildIdx] || -Infinity;
    if (array[idx] < Math.max(lChild, rChild)) {
        return false;
    } else {
        const left = isMaxHeap(array, lChildIdx);
        const right = isMaxHeap(array, rChildIdx);
        return left && right;
    }
}

module.exports = {
    isMaxHeap
};