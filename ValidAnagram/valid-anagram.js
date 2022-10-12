/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
 //Runtime: O(n)
 //Explanation: We use a map to count the occurences of letters in S loop. Then we remove them in T loop.
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;  //needs to be true
    
    let seen = new Map();  //Holds letters and the number of times they occur
    for(let i = 0; i < s.length; i++){
        if(seen[s[i]] === undefined) seen[s[i]] = 1;  //First occurence, add it to map and set occurences to 1
        else{
            seen[s[i]]++;   //Already seen, increment occurences
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(seen[t[i]] === undefined) return false;  //Ruh roh, we can't pop the letter. Return false!
        if(seen[t[i]] === 1) seen[t[i]] = undefined;  //Only one occurence remaining, remove it from the list
        else{
            seen[t[i]]--; //Multiple occurences remaining, decrement by 1
        }
    }
    
    return true;
};