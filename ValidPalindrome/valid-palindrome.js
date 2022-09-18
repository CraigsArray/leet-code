/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
   Given a string s, return true if it is a palindrome, or false otherwise.
 */
//Regex....ew. Make the string uniform by converting to lowercase and removing non-letters
//Runtime: O(n)
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');  //could use replace(/[_\W]/g,'') too
    let back = s.length - 1;  //back of string
    let front = 0;            //front of string
    while(front <= back){
        if(s[front] !== s[back]) return false  //Two finger compare with s[front] and s[back]
        front++;
        back--;
        }   
    return true;
}