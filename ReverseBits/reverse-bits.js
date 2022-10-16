/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Reverse bits of a given 32 bits unsigned integer.
 */
 var reverseBits = function(n) {
    //convert to binary
    let output = 0;
    let bitarray = [];
    while(n >= 1){  //Successive division will stop us at 1
        if(n % 2 === 1){  //If not divisible by 2
            bitarray.push(1);
            n--;
        }
        else{
            bitarray.push(0);    
        }
        n = n / 2;  //divide by 2 for each bit
    }

    let bitpower = 31;
    for(let i = 0; i < bitarray.length; i++){
        if(bitarray[i] === 1) output += 2**bitpower;
        bitpower--;
    }
    return output; 
};