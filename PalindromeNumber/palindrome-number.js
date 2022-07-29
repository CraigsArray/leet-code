/**
 * @param {number} x
 * @return {boolean}
 */
// One for loop means an O(n) runtime however solution is slow as toString() can be very taxing.
// Summary: Convert number to a string, then have i start as the leftmost number, and j be rightmost number, increment i and decrement j as you move towards the number in the middle
// Revisit: Can speed up by returning early with both these counters are looking at the middle number and haven't encountered any false pairs.
 var isPalindrome = function(x) {
    if(x < 0) return false
        else{
            var xString = x.toString()
            j = xString.length - 1
            for(i = 0; i < xString.length; i++){
                if(xString.charAt(i) !== xString.charAt(j)) return false
                j--;
                if(i == j) return true
        }
       return true
    }
};