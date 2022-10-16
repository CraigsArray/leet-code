/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Reverse bits of a given 32 bits unsigned integer.
 */
 //Summary: Building an array that represents the binary number
 //NOTE - toString(2) can be used to really simplify code at bottom
 var reverseBits = function(n) {
    //convert to binary - right to left
    let output = 0;
    let bitarray = [];
    while(n >= 1){  //Successive division will stop us at 1
        if(n % 2 === 1){  //If not divisible by 2
            bitarray.push(1);  //this bit is 1
            n--;
        }
        else{
            bitarray.push(0);    
        }
        n = n / 2;  //divide by 2 for each bit
    }

    let bitpower = 31;
    for(let i = 0; i < bitarray.length; i++){
        if(bitarray[i] === 1) output += 2**bitpower;  //add bit's value to total
        bitpower--;  //left to right, number values get halved
    }
    return output; 
};
/*
var reverseBits = function(n) {
    //convert to binary
    let output = 0;
    bitArray = n.toString(2).split("").reverse();  //toString(2) converts to binary string, split to array, reverse array

    let bitpower = 31;
    for(let i = 0; i < bitArray.length; i++){
        if(bitArray[i] === '1') output += 2**bitpower;
        bitpower--;
    }
    return output; 
};
*/
//SUPER SHORT
/*
var reverseBits = function(n) {
    //convert to binary
    bitString = n.toString(2).split("").reverse().join(""); //toString(2) converts to binary string, split to array, reverse array, back to string
    while(bitString.length < 32){
        bitString = bitString + "0";  //fill in leftover bits
    }
    return parseInt(bitString, 2);  //parseInt(X, 2) converts it to a base 2 integer
};
*/