#include <vector>
#include <queue>
#include <string>
#include <unordered_map>
#include <unordered_set>

using std::vector;
using std::queue;
using std::string;
using std::unordered_map;
using std::unordered_set;

// GraphNode used for adjacency list
class GraphNode {
public:
    string& val_;
    vector<string> neighbors_;

    GraphNode(string& val) : val_(val) {}
};

// Or use a HashMap
// unordered_map<string, vector<string>> adjList = 
//     {{"A", vector<string>{}}, {"B", vector<string>{}}};

// Given directed edges, build an adjacency list
unordered_map<string, vector<string>> buildAdjList() {
    vector<vector<string>> edges = 
        {{"A", "B"}, {"B", "C"}, {"B", "E"}, {"C", "E"}, {"E", "D"}};
    unordered_map<string, vector<string>> adjList;

    for (vector<string> edge:  edges) {
        string src = edge[0], dst = edge[1];
        adjList[src].push_back(dst);
    }
    return adjList;
}

// Count paths (backtracking)
int dfs(string& node, string& target, unordered_map<string, vector<string>>& adjList,
    unordered_set<string>& visit) {
    if (visit.count(node)) {
        return 0;
    }
    if (node == target) { 
        return 1;
    }
    int count = 0;
    visit.insert(node);
    for (string neighbor: adjList[node]) {
        count += dfs(neighbor, target, adjList, visit);
    }
    visit.erase(node);
    return count;
}

// Shortest path from node to target.
int bfs(string& node, string& target, unordered_map<string, vector<string>>& adjList) {
    int length = 0;
    unordered_set<string> visit;
    queue<string> queue;
    visit.insert(node);
    queue.push(node);
    
    while (queue.size()) {
        int queueLength = queue.size();
        for (int i = 0; i < queueLength; i++) {
            string curr = queue.front();
            queue.pop();
            if (curr == target) {
                return length;
            }
            for (string neighbor: adjList[curr]) {
                if (visit.count(neighbor) == 0) {
                    visit.insert(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        length++;
    }
    return length;
}