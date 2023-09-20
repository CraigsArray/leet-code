/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 /*
 Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/
//Solve by mapping the letters in magazine and begin pulling out letters when comparing note
var canConstruct = function(ransomNote, magazine) {
    var magazineMap = {} //Key = letter, Value = quantity
    for(var i = 0; i < magazine.length; i++){
        if(magazineMap[magazine[i]] === undefined) magazineMap[magazine[i]] = 1; //Add to map with quanity = 1
        else{
            magazineMap[magazine[i]]++; //Increase quantity of the letter
        }
    }
    for(var i = 0; i < ransomNote.length; i++){
        if(magazineMap[ransomNote[i]] === undefined) return false; //No available letters
        else{
            magazineMap[ransomNote[i]]--;
            if(magazineMap[ransomNote[i]] < 0) return false; //Not enough of the letter
        }
    }
    //Never encountered any issues constructing the ransomNote, we found our source and our perpetrator
    return true;
};