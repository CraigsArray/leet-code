/**
 * @param {number} n
 * @return {boolean}
 Given an integer n, return true if it is a power of two. Otherwise, return false.
 An integer n is a power of two, if there exists an integer x such that n == 2x.
 */
//Runtime: O(1);
//Explanation: We are checking if there is a whole number x, where 2^x = n.
//Using the inverse of an exponent, log. We get the equation log(base2) of n = x.
//Then we check if it's a whole number, meaning it is a multiple of 2.

 var isPowerOfTwo = function(n) {
    return (Math.log2(n) % 1 === 0);
};