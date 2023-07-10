/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a 
 * given number of rows like this: (you may want to display this pattern
 * in a fixed font for better legibility)
 * Runtime: O(n)
 */
var convert = function(s, numRows) {
    var output = {};  //Map
    var currChar = 0;
    var currRow = 0;
    var downFlag = true;
    if(numRows == 1) return s;

    while(currChar < s.length){
        if(output[currRow] == undefined) output[currRow] = s[currChar]
        else output[currRow] += s[currChar]

        if(downFlag) currRow++;
        else if(!downFlag) currRow--;

        if(currRow == (numRows - 1)) downFlag = false;
        else if (currRow == 0) downFlag = true;

        currChar++;

    }
    
    var finalOutput = ""
    for(var i = 0; i < numRows; i++){
        if(output[i] !== undefined) finalOutput += output[i];
    }
    return finalOutput;
};