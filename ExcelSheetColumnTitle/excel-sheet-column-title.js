/**
 * @param {number} columnNumber
 * @return {string}
  Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 */
 //Runtime: O(logn)? Might even be O(1)?
 var convertToTitle = function(columnNumber) {
    let alphabet = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
    let alphaMap = {};
    for(let i = 0; i < 26; i++){  //Build an alphabetMap for all the letters
        alphaMap[i] = alphabet[i];
    }
    let colTitle = "";  //Title will be built from right to left
    while(columnNumber > 0){
        let r = columnNumber % 26;  //First get the remainder
        columnNumber = Math.floor(columnNumber / 26);  //move to next order of magnitude AKA: shift left.
        if(r === 0) columnNumber--;  //Z will only be the leftmost number. All other occurences of r%26===0 should by Y's
        colTitle = alphaMap[r] + colTitle;  //Build small to big, right to left.
        
    }
    return colTitle;
};