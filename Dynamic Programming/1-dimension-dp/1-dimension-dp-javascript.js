// Brute Force
function bruteForce(n) {
    if (n <= 1) {
        return n;
    }
    return bruteForce(n - 1) + bruteForce(n - 2);
}

// Memoization
function memoization(n, cache) {
    if (n <= 1) {
        return n;
    }
    if (cache[n] != 0) {
        return cache[n];
    }
    cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);
    return cache[n];
}

// Dynamic Programming
function dp(n) {
    if (n < 2) { 
        return n;
    }
    let dp = [0,1]
    let i = 2;
    while (i <= n) {
        let tmp = dp[1];
        dp[1] = dp[0] + dp[1];
        dp[0] = tmp;
        i++;
    }
    return dp[1];
}
