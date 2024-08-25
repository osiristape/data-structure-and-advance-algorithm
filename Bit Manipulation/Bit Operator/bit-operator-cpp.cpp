int main() {
    // AND
    int n = 1 & 1;

    // OR 
    n = 1 | 0;

    // XOR
    n = 0 ^ 1;

    // NOT (negation)
    n = ~n;

    // Bit Shifting
    n = 1;
    n = n << 1;
    n = n >> 1;

    return 0;
}

// Counting Bits
int countBits(int n) {
    int count = 0;
    while (n > 0) {
        if ((n & 1) == 1) {
            count++;
        }
        n = n >> 1; // same as n / 2 
    }
    return count;
}
