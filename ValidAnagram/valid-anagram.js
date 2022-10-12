/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;  //needs to be true
    
    let seen = new Map();
    for(let i = 0; i < s.length; i++){
        if(seen[s[i]] === undefined) seen[s[i]] = 1;
        else{
            seen[s[i]]++;
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(seen[t[i]] === undefined) return false;
        if(seen[t[i]] === 1) seen[t[i]] = undefined;
        else{
            seen[t[i]]--;
        }
    }
    
    return true;
};