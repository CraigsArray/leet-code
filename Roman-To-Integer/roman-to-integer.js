/**
 * @param {string} s
 * @return {number}
 * Given a roman numeral, convert it to an integer.
 */
 var output = 0;
 var romanToInt = function(s) {
    romanNumMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000            
    } 
    for(i = 0; i < s.length; i++){
        if(s.charAt(i) == "I" && s.charAt(i+1) == "V"){
                output += 4
                i++
            }
        else if(s.charAt(i) == "I" && s.charAt(i+1) == "X"){
                output += 9
                i++
            }         
        else if(s.charAt(i) == "X" && s.charAt(i+1) == "L") {
                output += 40
                i++
            }
        else if(s.charAt(i) == "X" && s.charAt(i+1) == "C") {
                output += 90
                i++
            }
        else if(s.charAt(i) == "C" && s.charAt(i+1) == "D") {
                output += 400
                i++
            }
        else if(s.charAt(i) == "C" && s.charAt(i+1) == "M") {
                output += 900
                i++
            }
        else output += romanNumMap[s.charAt(i)]
    }   
    return output
};