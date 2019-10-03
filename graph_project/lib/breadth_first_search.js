// Again, use a queue to implement the BFS, though it is important to note that nodes in graphs can share neighbors
// Need to use an additional data structure to track nodes that have been visited
// This way, we won't get stuck in an infinite loop
// 
// Strategy...
// Loop through all nodes, returning early if value is found, and returning null if loop ends without finding value
function breadthFirstSearch(startingNode, targetVal) {
    // Initialize visited set for constant lookup and queue with the node to start BFS from
    const visited = new Set();
    const queue = [ startingNode ];
    while (queue.length) {
        const node = queue.shift();
        if (!visited.has(node)) {
            if (node.val === targetVal) return node;
            visited.add(node);
            node.neighbors.forEach(neighbor => {
                if (!visited.has(neighbor)) queue.push(neighbor);
            })
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};