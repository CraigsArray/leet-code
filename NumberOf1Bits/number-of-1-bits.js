/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
//Summary: Right to left conversion
//Runtime: O(log n)
var hammingWeight = function(n) {
    //convert to binary
    let count = 0;  
    while(n >= 1){  //Successive division will stop us at 1
        if(n % 2 === 1){  //If not divisible by 2
            count++;      //Remove the remainder (1) and increase our count
            n--;
        } 
        n = n / 2;  //divide by 2 for each bit
    }
    return count;    
};

//Summary: Left to right binary conversion.
/*
 var hammingWeight = function(n) {
    //convert to binary
    let power = 0;
    let count = 0;
    while(2**power < n){  //first get biggest power (or just set power to 32 at start and drop this loop)
        power++;
    }
    while(power >= 0){  //backtrack from that large number
        if(n >= 2**power){  //n is bigger than this binary digit, so it will need to be represented
            count++;        //by this bit + following bits
            n -= 2**power;  //reduce n by the value of that binary digit
        }
        power--;
    }
    
    return count;
};
*/