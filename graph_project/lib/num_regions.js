// Implemented a DFS to track the number of regions in the input adjacency list
// Note:
// If there are non-connected regions in the graph, then DFS from one node will not touch nodes in other regions
// Thus, we track visited regions and after the first DFS, we only call DFS again if a new region is found
// Count is incremented each time that a DFS returns
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