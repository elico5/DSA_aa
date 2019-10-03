// Balanced Binary Tree - https://leetcode.com/problems/balanced-binary-tree/
// Recursive DFS Strategy
// 
// Given a root node, return a Boolean indicating whether the tree is height balanced
// Notes:
// For a tree to be height balanced, the subtrees at a node must not differ in height by more than 1, and the subtrees must each be height balanced
// The above is an inherently recursive definition
// 
// Strategy...
// Performed a DFS from the root node that bubbled up tuples with booleans as to whether subtree was balanced and the subtrees height
// 
// Complexity Analysis
// I want to say this is O(n) runtime, as each node in the tree was recursively touched in determining whether the top node held a height balanced tree;
// Space complexity O(n) counting memory taken in the recursive call stacks
var heightBalance = function(root) {
    // Empty tree is height balanced (base case)
    if (!root) {
        return [true, -1];
    } else {
        // Compare left and right subtrees to determine if node is balanced
        const left = heightBalance(root.left);
        const right = heightBalance(root.right);
        if (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1) {
            return [true, 1 + Math.max(left[1], right[1])];
        } else {
            return [false, 0];
        }
    }
}

var isBalanced = function(root) {
    if (!root) {
        return true;
    } else {
        const left = heightBalance(root.left);
        const right = heightBalance(root.right);
        // Check height condition on balanced subtrees
        return left[0] &&
            right[0] &&
            Math.abs(left[1] - right[1]) <= 1;
    }
};