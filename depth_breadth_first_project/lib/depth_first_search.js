// DFS clasically uses a stack (lends itself to recursion using the callstack)
// Popping a node off of the top of the stack implies adding its children to the stack
// This way, branches are fully explored before one another
function depthFirstSearch(root, targetVal) {
    // Base case
    if (!root) return null;
    // Target is found
    if (root.val === targetVal) {
        return root;
    } else {
        // Search left subtree
        const left = depthFirstSearch(root.left, targetVal);
        if (left) return left;
        // Search right subtree
        const right = depthFirstSearch(root.right, targetVal);
        if (right) return right;
    }
    // Not found
    return null;
}

module.exports = {
    depthFirstSearch
};