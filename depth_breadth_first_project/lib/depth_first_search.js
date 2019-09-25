function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) {
        return root;
    } else {
        const left = depthFirstSearch(root.left, targetVal);
        if (left) return left;
        const right = depthFirstSearch(root.right, targetVal);
        if (right) return right;
    }
    return null;
}

module.exports = {
    depthFirstSearch
};