// GraphNode used for adjacency list
/* 
public class GraphNode {
    int val;
    List<GraphNode> neighbors;
    
    public GraphNode(int val) {
        this.val = val;
        this.neighbors = new ArrayList<GraphNode>();
    }
}
*/

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Queue;
import java.util.LinkedList;

public class AdjacencyList {
    
    public  HashMap<String, ArrayList<String>> buildAdjList() {
        HashMap<String, ArrayList<String>> adjList = new HashMap<>();

        String[][] edges = {{"A", "B"}, {"B", "C"}, {"B", "E"}, {"C", "E"}, {"E", "D"}};
        HashSet<String> visit = new HashSet<>();

        adjList.put("A", new ArrayList<String>());
        adjList.put("B", new ArrayList<String>());

        for (String[] edge: edges) {
            String src = edge[0], dst = edge[1];
            if (!adjList.containsKey(src)) {
                adjList.put(src, new ArrayList<String>());    
            }
            if (!adjList.containsKey(dst)) {
                adjList.put(dst, new ArrayList<String>());    
            }
            adjList.get(src).add(dst);    
        }
        return adjList;
    }

    // Count paths (backtracking)
    public int dfs(String node, String target, HashMap<String, ArrayList<String>> adjList, HashSet<String> visit) {
        if (visit.contains(node)) {
            return 0;
        }
        if (node == target) {
            return 1;
        }
        int count = 0;
        visit = new HashSet<String>();
        visit.add(node);
        for (String neighbor: adjList.get(node)) {
            count+=dfs(neighbor, target, adjList, visit); 
        }
        visit.remove(node);
        return count;
    }

    // Shortest path from node to target.
    public int bfs(String node, String target, HashMap<String, ArrayList<String>> adjList) {
        int length = 0;
        HashSet<String> visit = new HashSet<String>();
        Queue<String> q = new LinkedList<String>();
        visit.add(node);
        q.add(node);

        while (q.size() != 0) {
            int queueLength = q.size();
            for (int i = 0; i < queueLength; i++) {
                String curr = q.peek();
                q.poll();
                if (curr.equals(target)) {
                    return length;
                }
                for (String neighbor: adjList.get(curr)) {
                    if (!visit.contains(neighbor)) {
                        visit.add(neighbor);
                        q.add(neighbor);
                    }
                }
            }
            length++;
        }
        return length;
    }
}