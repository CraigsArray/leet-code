/**
 * @param {string} s
 * @return {number}
 */
 /*
 Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */
 //Create an object of the characters as a key with their values being the index. If it's repeated, remove index and replace with false.
 //Runtime O(n). Iterates through loop once and through map, which makes it between n and 2n.
 var firstUniqChar = function(s) {
    var characters = new Map(); //Keys = characters, values = index(unique)/false(repeated)
    for(var i = 0; i < s.length; i++){
        if(characters[s[i]] === undefined) characters[s[i]] = i;
        else{
            characters[s[i]] = false;
        }
    }
    //Find the first value in the 
    for(let value of Object.values(characters)){
        if(value !== false) return value;
    }
    return -1;
};