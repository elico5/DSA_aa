function numRegions(graph) {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (!visited.has(node)) {
            count ++;
            dfs(node, graph, visited);
        }
    }
    return count;
}

function dfs(node, graph, visited) {
    if (!visited.has(node)) {
        visited.add(node);
        graph[node].forEach(neighbor => {
            dfs(neighbor, graph, visited);
        })
    }
}

module.exports = {
    numRegions
};