/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 !== 0) return false //Edge Case: cant have odd number of brackets
    map = {  //Map where each opening parentheses is paired with it's closer
        '(': ')',
        '[': ']',
        '{': '}'
    }
    opened = [] //brackets that are opened will add their closing bracket to this array
    for(i = 0; i < s.length; i++){
        if(map[s[i]]){               //if it's an opening bracket - 
            opened.push(map[s[i]]);  //add matching closing bracket to array
        }
        else if (s[i] !== opened[opened.length - 1]){  //else it's a closing bracket, check if it matches the type of the previously opened bracket
            return false;  //they didn't match, not a valid string. Out of order
        }
        else opened.pop(); //they matched, remove the matching bracket from the array
    }
    if(opened.length == 0) return true; //if all brackets have been closed, return true
    else return false                   //else there was an open bracket left behind!
    
};