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
 //Binary search with a while loop.
 //Runtime O(log n)
 var guessNumber = function(n) {
    var left = 1;
    var right = n;

    while(left <= right){
        //New search, new mid
        var mid = Math.floor(left + (right - left) / 2);
        //Found Answer
        if(guess(mid) === 0) return mid;
        //Too big, change limit on right
        else if(guess(mid) === -1) right = mid - 1;
        //Too small, change limit on left
        else left = mid + 1;

    }
   return output;
    
};