/**
 * @param {number} x
 * @return {boolean}
 * Given an integer x, return true if x is palindrome integer.
   An integer is a palindrome when it reads the same backward as forward.
 */
// Runtime: O(logn)? Moving in fromt front and back
// Summary: Convert number to a string, then have i start as the leftmost number, and j be rightmost number, increment i and decrement j as you move towards the number in the middle
var isPalindrome = function(x) {
    if(x < 0) return false;  
    if(x === 1) return true;  //edgecases
    var xString = x.toString();  //strings are easier to compare  
    j = xString.length - 1;
    for(i = 0; i <= j; i++){  //2 fingers moving towards each other, i moves from front, j from back
        if(xString[i] != xString[j]) return false;  //at any point they don't match, return false
        j--;  //move in from the back
    }
    return true; //success
        
};