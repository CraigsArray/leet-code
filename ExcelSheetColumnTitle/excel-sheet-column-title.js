/**
 * @param {number} columnNumber
 * @return {string}
 Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 */
 //Runtime: O(logn)? Might even be O(1)?
 var convertToTitle = function(columnNumber) {
    let alphabet = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
    let alphaMap = {};
    for(let i = 0; i < 26; i++){
        alphaMap[i] = alphabet[i];
    }
    let colTitle = "";
    while(columnNumber > 0){
        let r = columnNumber % 26;
        columnNumber = Math.floor(columnNumber / 26);
        if(r === 0) columnNumber--;
        colTitle = alphaMap[r] + colTitle;
        
    }
    return colTitle;
};