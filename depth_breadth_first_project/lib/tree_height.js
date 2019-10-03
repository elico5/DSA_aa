// Similar to the tree sum problem, this problem utilizes an application of DFS to return the tree's height
// Instead of adding the sum of each subtree to the root's value to get the total sum, you add one edge (from the 
// root to either subtree) to the maximum height between the two trees
// Base case adds 1 to -1 in the case that the subtree is a root, then the height of a single node tree is 0 as there are no edges
// Classically, the empty tree has -1 height...
function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.left));
}

module.exports = {
    treeHeight
};