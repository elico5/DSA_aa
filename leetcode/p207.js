// Course Schedule - https://leetcode.com/problems/course-schedule/
// Indegree Strategy
// 
// Notes:
// The "indegree" of a node is the number of directed edges pointing to that node
// We then contruct our adjacency list and graph such that the nodes with 0 indegree correspond to nodes that have no prerequisite
//
// Strategy:
// Enqueue nodes with 0 indegree, loop and dequeue until the queue is empty
// During dequeue:
    // Decrement indegree of all neighboring nodes that have dequeued node as a prereq
    // If their indegree becomes 0, enqueue them
// Additionally, fill out a table with booleans, if all entries are true, then all courses can be completed
var canFinish = function(numCourses, prerequisites) {
    if (!prerequisites.length) return true;
    // Construct graph and table and indegree tracking
    const graph = {};
    const indegree = Array.from({ length: numCourses }, () => 0);
    const completable = Array.from({ length: numCourses }, () => false);
    prerequisites.forEach(([course, prereq]) => {
        if (!graph[prereq]) graph[prereq] = [];
        if (!graph[course]) graph[course] = [];
        graph[prereq].push(course);
        indegree[course]++;
    })
    // Initialize queue - note that array is inefficient for use as queue...
    const queue = [];
    indegree.forEach((el, i) => {
        if (el === 0) {
            if (graph[i]) {
                // Enqueue the course's identifier
                queue.push(i);
            } else {
                // Index of a course that may not exist (numCourses and prerequisites don't match in size)
                completable[i] = true;
            }
        }
    });
    // Loop until queue is empty
    while (queue.length) {
        const completed = queue.shift();
        completable[completed] = true;
        graph[completed].forEach(course => {
            indegree[course]--;
            // Add course if indegree becomes 0
            if (!indegree[course]) queue.push(course);
        })
    }
    return completable.every(el => el);
};