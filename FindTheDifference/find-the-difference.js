/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 /*
 You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.
*/
//Solve by mapping s. Keys = letter, Values = quantity. We pull out letters when interating through t until we hit a shortage on a letter, value = 0
//Runtime: O(n)
var findTheDifference = function(s, t) {
    var map = {}
    for(var i = 0; i < s.length; i++){
        if(map[s[i]] === undefined) map[s[i]] = 1;
        else{
            map[s[i]]++; //increase quantity
        }
    }
    for(var i = 0; i < t.length; i++){
        if(map[t[i]] === undefined || map[t[i]] === 0) return t[i];
        else{
            map[t[i]]--; //reduce quantity 
        }
    }
};