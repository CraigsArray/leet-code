/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var left = 1;
    var right = n;
    var curr = Math.floor((left + right)/2);

    var binarySearch = function(curr, left, right){
        //Base Condition
        if(left > right) return false;
        //New search, new mid
        var curr = Math.floor((left + right)/2);
        //Found Answer
        if(guess(curr) === 0) return curr;
        
        //Too big, change limit on right
        if(guess(curr) === -1) binarySearch(curr, left, curr - 1);
        //Too small, change limit on left
        if(guess(curr) === 1) binarySearch(curr, curr + 1, right);
 
    }

   var output = binarySearch(curr, left, right);
   return output;
    
};