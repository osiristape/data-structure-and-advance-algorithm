// Count paths (backtracking)
function dfs(grid, r, c, visit) {
    let ROWS = grid.length, COLS = grid[0].length;

    if (Math.min(r, c) < 0 || r == ROWS || c == COLS ||
        visit[r][c] == 1 || grid[r][c] == 1) {
        return 0;
    }
    if (r == ROWS - 1 && c == COLS - 1) {
        return 1;
    }
    visit[r][c] = 1;

    let count = 0;
    count += dfs(grid, r + 1, c, visit);
    count += dfs(grid, r - 1, c, visit);
    count += dfs(grid, r, c + 1, visit);
    count += dfs(grid, r, c - 1, visit);

    visit[r][c] = 0;
    return count;
}
