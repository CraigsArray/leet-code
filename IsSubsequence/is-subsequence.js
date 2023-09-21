/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 /*
 Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
 //Needs to be in order. Iterate through t and save the characters in order, return comparison to s
 //Runtime: O(n)
 var isSubsequence = function(s, t) {
    var subsequence = "";
    var sCurr = 0;
    for(var i = 0; i < t.length; i++){
        if(t[i] == s[sCurr]){
            subsequence += t[i];
            sCurr++; 
        }               
    }
    return subsequence === s    
};