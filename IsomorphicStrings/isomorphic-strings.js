/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const sMap = new Map();  //2 maps
    const tMap = new Map();  //no characters can map to the same character

    for(let i = 0; i < s.length; i++){  //loop through string
        
        if(sMap.has(s[i])){  //
            if(sMap.get(s[i]) !== t[i]) return false;       
        } 
        else if(tMap.has(t[i])) return false;
        else{
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
        }
        
    }

    return true;
};