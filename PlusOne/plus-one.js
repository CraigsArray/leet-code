/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= -1; i--){
        
        digits[i] += 1; // Base
              
        if(digits[i] === 10 && i === 0){      //edge case for when number needs to shift 1 place
            digits[i] = 0;
            return [1, ...digits];
        }
        else if(digits[i] === 10) digits[i] = 0;   //edge case for going from 9's to 10's
        else break;
      
    }
    return digits;
    
};