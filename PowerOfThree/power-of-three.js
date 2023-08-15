/**
 * @param {number} n
 * @return {boolean}
 */
 // 326. Given an integer n, return true if it is a power of three. Otherwise, return false.
 // Complexity O(n);
 var isPowerOfThree = function(n) {
    while(n >= 3){
        n = n / 3;
    }
    return (n == 1)
};