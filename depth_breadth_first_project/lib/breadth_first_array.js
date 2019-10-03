// BFS clasically uses a queue and thus doesn't lend itself towards recursive solutions
// Starting with a non-empty queue, popping a node off of the queue means adding its children to the queue (if they exist)
// 
// Note that while below solution traverses tree in a breadth-first manner it is inefficient
// Array should not be used as a queue as the dequeue operation no longer is O(1)
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