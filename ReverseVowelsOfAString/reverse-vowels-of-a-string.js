/**
 * @param {string} s
 * @return {string}
 */
 // 345. Reverse Vowels of a String
 // Given a string s, reverse only all the vowels in the string and return it.
 // Note: Care of upper/lower case. Solved with two-finger approach.
 // Complexity: O(n)
 var reverseVowels = function(s) {
    s = s.split('')
    var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    var left = 0;
    var right = s.length - 1;
    while(left < right){
        while(!vowels.includes(s[left]) && left < right) left++;
        while(!vowels.includes(s[right]) && left < right) right--;
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    s = s.join("");
    return s;
};