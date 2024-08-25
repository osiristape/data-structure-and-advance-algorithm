#include <vector>
#include <algorithm>

using std::vector;
using std::min;

// Count paths (backtracking)
// In C++ it's easier to use a 2D array for visit rather than a hashset.
int dfs(vector<vector<int>>& grid, int r, int c, vector<vector<int>>& visit) {
    int ROWS = grid.size(), COLS = grid[0].size();
    if (min(r, c) < 0 || r == ROWS || c == COLS ||
        visit[r][c] || grid[r][c]) {
        return 0;
    }
    if (r == ROWS - 1 && c == COLS - 1) {
        return 1;
    }

    visit[r][c] = 1;

    int count = 0;
    count += dfs(grid, r + 1, c, visit);
    count += dfs(grid, r - 1, c, visit);
    count += dfs(grid, r, c + 1, visit);
    count += dfs(grid, r, c - 1, visit);

    visit[r][c] = 0;
    return count;
}
