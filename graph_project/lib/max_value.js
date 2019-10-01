function maxValue(node, visited=new Set()) {
    let maxValue = node.val;
    const queue = [ node ];
    while (queue.length) {
        const checkNode = queue.shift();
        if (!visited.has(checkNode)) {
            if (checkNode.val > maxValue) maxValue = checkNode.val;
            visited.add(checkNode);
            checkNode.neighbors.forEach(neighbor => {
                if (!visited.has(neighbor)) queue.push(neighbor);
            })
        }
    }
    return maxValue;
}

module.exports = {
    maxValue
};