// Similarly, used a BFS to find the maximum value
// Note:
// DFS could be used additionally, so long as the max value is returned by the function, and the visited set is passed around to recursive calls
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