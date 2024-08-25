/* operations
    // AND
    let n = 1 & 1;

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
*/

// Count the number of 1 bits
function countBits(n) {
    let count = 0;
    while (n > 0) {
        if ((n & 1) == 1) {
            count++;
        }
        n = n >> 1; // same as n / 2
    }
    return count;
}
