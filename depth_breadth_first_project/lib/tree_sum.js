// Application of DFS to summing all values in a binary tree
// If you reach a null node its value is 0, and then the sum of a tree is the value at the root plus the sum of each subtree
function treeSum(root) {
    if (!root) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}

module.exports = {
    treeSum
};