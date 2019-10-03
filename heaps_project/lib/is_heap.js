// Notes:
// Heaps are partially sorted binary trees
// That is, heap rule implies that (for max heap) a node is greater than or equal to each of it's children
// Using an array as a heap and parent-child index relationships, just verify that heap rule is met for each element
//
// Assume that the array will always have a null element at the 0th index
function isMaxHeap(array, idx=1) {
    // Base case for recursive steps
    if (idx >= array.length) return true;
    // Find left child and right child indices
    const lChildIdx = 2 * idx;
    const rChildIdx = 2 * idx + 1;
    const lChild = array[lChildIdx] || -Infinity;
    const rChild = array[rChildIdx] || -Infinity;
    // Compare heap rule for root node
    if (array[idx] < Math.max(lChild, rChild)) {
        return false;
    } else {
        // Check heap rule for left and right subtrees
        const left = isMaxHeap(array, lChildIdx);
        const right = isMaxHeap(array, rChildIdx);
        return left && right;
    }
}

module.exports = {
    isMaxHeap
};