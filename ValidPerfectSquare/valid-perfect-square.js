/**
 * @param {number} num
 * @return {boolean}
 Given a positive integer num, return true if num is a perfect square or false otherwise.
A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
 */

 //Not using a library function
 //Uses operand for power. 1/2 power is same as sqrt.
 //O(1)
 var isPerfectSquare = function(num) {
    return(num**.5 % 1 === 0)   
};

//Not using any sort of power operator. Check all perfect squares up to the number.
// var isPerfectSquare = function(num) {
//     for(var i = 1; i*i <= num; i++){
//         if(i*i === num) return true
//     }
//     return false;
// };