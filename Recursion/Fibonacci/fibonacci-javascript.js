// Recursive implementation to calculate the n-th Fibonacci number
function fibonacci(n) {
    // Base case: n = 0 or 1
    if (n <= 1) {
      return n;
    }
    // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}