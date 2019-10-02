// Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Recursive Strategy
// 
// Notes...
// Pre-order: [root, ...leftSubtree, ...rightSubtree]
    // where leftSubtree & rightSubtree are pre-order representations
// In-order: [...leftSubtree, root, ...rightSubtree]
    // where leftSubtree & rightSubtree are in-order representations
// 
// Strategy...
// We know from the differences between traversals that the root node's value is always going to be the first in a pre-order traversal array
// Then, knowing the root node, we can construct binary subtrees if we can find the pre-order and in-order traversal arrays for each subtree
// And, we must establish a base case to halt recursion
// Thus, we can find the index of the root value in the in-order tree, and split into in-order arrays for the subtrees
// Additionally, this index can be used to find the pre-order trees for each subtree in the pre-order array
// 
// Complexity Analysis...
// Worst case O(n^2) runtime, as there is no guarantee that the binary tree is balanced
// Thus, at each step since the traversal array must be scanned to find the root index, an O(n) operation scales with tree height
// On that line of thinking, a height balanced tree would have a height of O(log(n)) allowing for O(n * log(n)) runtime in the best case
// Space complexity of O(n) as a node is created for each value in the input array
var buildTree = function (preorder, inorder) {
    // Traversals have been exhausted and we reach null pointers
    if (!preorder.length || !preorder.length) return null;
    // Get root value and create node
    const rootVal = preorder[0];
    const rootNode = new TreeNode(rootVal);
    // Using root value index determine the pre-order and in-order subtree traversals
    const rootIndex = inorder.indexOf(rootVal);
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
    const leftPreorder = preorder.slice(1, rootIndex + 1);
    const rightPreorder = preorder.slice(rootIndex + 1);
    // Recursive calls
    rootNode.left = buildTree(leftPreorder, leftInorder);
    rootNode.right = buildTree(rightPreorder, rightInorder);
    return rootNode;
};