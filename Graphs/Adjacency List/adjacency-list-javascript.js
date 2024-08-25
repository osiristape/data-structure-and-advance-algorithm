// GraphNode used for adjacency list
class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = new Array();
    }
} 

function buildAdjList() {
    let adjList = new Map();
    let edges = [["A", "B"], ["B", "C"], ["B", "E"], ["C", "E"], ["E", "D"]];
    adjList.set("A", new Array());
    adjList.set("B", new Array());

    for (let edge of edges) {
        let src = edge[0], dst = edge[1];
        if (!adjList.has(src)) {
            adjList.set(src, new Array());    
        }
        if (!adjList.has(dst)) {
            adjList.set(dst, new Array());    
        }
        adjList.get(src).push(dst);    
    }
    return adjList;
}

// Count paths (backtracking)
function dfs(node, target, adjList, visit) {
    if (visit.has(node)) {
        return 0;
    }
    if (node == target) {
        return 1;
    }
    let count = 0;
    visit = new Set();
    visit.add(node);
    for (let neighbor of adjList.get(node)) {
        count+=dfs(neighbor, target, adjList, visit); 
    }
    visit.delete(node);
    return count;
}

// Shortest path from node to target.
function bfs(node, target, adjList) {
    let length = 0;
    let visit = new Set();
    let q = [];
    visit.add(node);
    q.push(node);

    while (q.length != 0) {
        let queueLength = q.length;

        for (let i = 0; i < queueLength; i++) {
            let curr = q.shift();
            if (curr === target) {
                return length;
            }
            for (let neighbor of adjList.get(curr)) {
                if (!visit.has(neighbor)) {
                    visit.add(neighbor);
                    q.push(neighbor);
                }
            }
        }
        length++;
    }
    return length;
}