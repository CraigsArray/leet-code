/**
 * @param {number} n
 * @return {boolean}
 */
// 326. Given an integer n, return true if it is a power of four. Otherwise, return false.
// Complexity O(n);
// Divide by 4 until there's nothing left. Confirm if it's a power by checking the remainder.
var isPowerOfFour = function(n) {
    while(n >= 4){
        n = n / 4;
    }
    return (n == 1)
};