

/**
 * Memoization is an optimization technique that involves storing the results
 * of expensive function calls and returning the cached result when the same
 * inputs occur again. It helps improve performance by avoiding redundant
 * computations.
 *
 * Creates a memoized function that adds 80 to a given number.
 * The function uses a cache to store previously computed results,
 * improving performance for repeated inputs.
 *
 * @function
 * @returns {Function} A memoized function that takes a number `n` as input,
 * computes `n + 80` if not already cached, and returns the result.
 *
 * @example
 * const add80 = memoizedAdd80();
 * console.log(add80(5)); // Outputs: "long time" followed by 85
 * console.log(add80(5)); // Outputs: 85 (retrieved from cache)
 */
function memoizedAdd80(){
    let cache = {};
    return function(n){
        if (n in cache){
            return cache[n];
        }else{
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

