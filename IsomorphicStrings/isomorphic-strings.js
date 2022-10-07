/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * NOTE: s.length === t.length
 */
 //Runtime: O(n) - loops through size of string (n) once.
 var isIsomorphic = function(s, t) {
    const sMap = new Map();  //2 maps
    const tMap = new Map();  //no characters can map to the same character

    for(let i = 0; i < s.length; i++){  //loop through string
        
        if(sMap.has(s[i])){  //s char has been mapped already
            if(sMap.get(s[i]) !== t[i]) return false;  //s char was paired with another letter, return false     
        } 
        else if(tMap.has(t[i])) return false;  //s char hasn't been mapped, but t char is already paired with another s char
        else{
            sMap.set(s[i], t[i]);  //add pair to s map
            tMap.set(t[i], s[i]);  //add pair to t map
        }
        
    }

    return true;  
};