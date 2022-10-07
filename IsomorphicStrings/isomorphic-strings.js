/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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