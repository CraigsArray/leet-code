/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 // 344. Reverse String
 // Write a function that reverses a string. The input string is given as an array of characters s.
 // Complexity: O(n)?
 var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    while(left < right){
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

};