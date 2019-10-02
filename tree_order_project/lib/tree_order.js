// Trees are inherently recursive
// In-order traversal traverses the left subtree before the root and then the right subtree
function inOrderArray(root) {
    let fill = [];
    if (root) {
        fill = fill.concat(inOrderArray(root.left));
        fill.push(root.val);
        fill = fill.concat(inOrderArray(root.right));
    }
    return fill;
}

// Post-order traversal traverses the left subtree, then the right subtree, then the root
function postOrderArray(root) {
    let fill = [];
    if (root) {
        fill = fill.concat(postOrderArray(root.left), postOrderArray(root.right));
        fill.push(root.val);
    }
    return fill;
}

module.exports = {
    inOrderArray,
    postOrderArray
};