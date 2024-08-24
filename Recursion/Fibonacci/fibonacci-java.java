// Recursive implementation to calculate the n-th Fibonacci number
public class Fibonacci { 

    // Base case: n = 0 or 1
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }

        // Recursive case: fib(n) = fib(n - 1) + fib(n - 1)
        return fibonacci(n-1) + fibonacci(n-2);
    }
}