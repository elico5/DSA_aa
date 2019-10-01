function breadthFirstSearch(startingNode, targetVal) {
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