function breadthFirstArray(root) {
    const fill = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        fill.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return fill;
}

module.exports = {
    breadthFirstArray
};