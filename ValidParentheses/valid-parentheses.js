/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 !== 0) return false //Edge Case: cant have odd number of brackets
    map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    opened = [] //list of brackets opened - but swapped with matching closing bracket 
    for(i = 0; i < s.length; i++){
        if(map[s[i]]){
            opened.push(map[s[i]])
        }
        else if (s[i] !== opened[opened.length - 1]){
            return false
        }
        else opened.pop();
    }
    if(opened.length == 0) return true; //if all brackets have been closed, return true
    else return false                   //else there was an open bracket left behind!
    
};