function inOrderArray(root) {
    let fill = [];
    if (root) {
        fill = fill.concat(inOrderArray(root.left));
        fill.push(root.val);
        fill = fill.concat(inOrderArray(root.right));
    }
    return fill;
}

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