// Matrix (2D Grid)
let grid = [[0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]];

// Shortest path from top left to bottom right
function bfs(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let visit = new Array(4).fill(0).map(() => Array(4).fill(0)); // 4x4 2d array
    let queue = new Array();

    queue.push(new Array(2).fill(0)); // Add {0, 0}
    visit[0][0] = 1;

    let length = 0;
    while (queue.length > 0) {
        let queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let pair = queue.shift();
            let r = pair[0], c = pair[1];

            if (r == ROWS - 1 && c == COLS - 1) {
                return length;
            }    
            // We can directly build the four neighbors
            let neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
            for (let j = 0; j < 4; j++) {
                let newR = neighbors[j][0], newC = neighbors[j][1];
                if (Math.min(newR, newC) < 0 || newR == ROWS || newC == COLS
                || visit[newR][newC] == 1 || grid[newR][newC] == 1) {
                    continue;
                }
                queue.push(neighbors[j]);
                visit[newR][newC] = 1;
            }
        }
        length++;
    }
    return length; // This should never be called
}
