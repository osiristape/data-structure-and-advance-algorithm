import java.util.List;
import java.util.Set;
import java.lang.Math;

public class MatrixDFS {
    // Count paths (backtracking)
    int dfs(int[][] grid, int r, int c, int[][] visit) {
        int ROWS = grid.length, COLS = grid[0].length;

        if (Math.min(r, c) < 0 || r == ROWS || c == COLS ||
            visit[r][c] == 1 || grid[r][c] == 1 ) {
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
}