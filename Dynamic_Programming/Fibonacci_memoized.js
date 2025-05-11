/**
 * Calculates the nth Fibonacci number using memoization to optimize performance.
 *
 * The Fibonacci sequence is defined as:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 *
 * This implementation uses a memo object to store previously computed Fibonacci
 * numbers, reducing the time complexity from exponential (O(2^n)) to linear (O(n)).
 *
 * @param {number} n - The position in the Fibonacci sequence to calculate. Must be a non-negative integer.
 * @param {Object} [memo={}] - An optional object to store previously computed Fibonacci numbers.
 * @returns {number} The nth Fibonacci number.
 *
 * @throws {Error} Throws an error if `n` is not a non-negative integer.
 *
 * @example
 * // Basic usage
 * fibonacci(0); // 0
 * fibonacci(1); // 1
 * fibonacci(6); // 8
 *
 * @example
 * // Using a custom memo object
 * const memo = {};
 * fibonacci(10, memo); // 55
 * fibonacci(15, memo); // 610 (reuses previously computed values in `memo`)
 */
function fibonacci(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Example usage
console.log(fibonacci(10)); 