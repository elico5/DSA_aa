// Kth Largest Element in an Array - https://leetcode.com/problems/kth-largest-element-in-an-array/
// Heapify Array Strategy
// 
// Naive Solution:
// In-place sort using an O(n*log(n)) algorithm and indexing into the Kth to last element... O(n*log(n)) runtime, O(1) space
// 
// Better Solution:
// In-place heapification of the array (amortized O(n)), then delete max K times... O(k*log(n))
// Analysis: O(n) up front heapification, then k log(n) operations to delete the max from the heap
// Space is O(1) cause array is altered in-place to form heap

// Swap helper function
var swap = function (array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

// Heapify an array starting at a certain index
function heapify(array, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= array.length) leftVal = -Infinity;
    if (rightIdx >= array.length) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, swapIdx);
}

var findKthLargest = function (nums, k) {
    // Heapify array
    for (let i = nums.length - 1; i >= 0; i--) {
        heapify(nums, i);
    }
    // Delete max from heap k times
    for (let i = 1; i <= k; i++) {
        if (i === k) {
            return nums[0];
        } else {
            nums[0] = nums.pop();
            heapify(nums, 0);
        }
    }
};