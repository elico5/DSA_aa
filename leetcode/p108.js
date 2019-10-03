// Convert Sorted Array to Binary Search Tree 
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Recursion Strategy
// 
// Problem details that the resultant tree needs to be height balanced
// Notes:
// In a binary search tree, all values in the left subtree are less than the root, and all values in right subtree are greater than or equal
// Thus, the mid index in the array is the root's value, and the subtrees are formed recursively from the arrays on either side
// 
// Complexity Analysis
// While we recursively handle tree construction, that a node is created for every element in the input array makes me think this is O(n) runtime
// Space complexity O(n) as n nodes are created
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null;
    } else if (nums.length === 1) {
        return new TreeNode(nums[0]);
    } else {
        const midIndex = Math.floor(nums.length / 2);
        const rootNode = new TreeNode(nums[midIndex]);
        rootNode.left = sortedArrayToBST(nums.slice(0, midIndex));
        rootNode.right = sortedArrayToBST(nums.slice(midIndex + 1));
        return rootNode;
    }
};