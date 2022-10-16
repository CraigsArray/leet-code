/**
 * @param {string} columnTitle
 * @return {number}
 * Runtime: O(n)
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
 */
 var titleToNumber = function(columnTitle) {
    let map  = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
    }
    let output = 0;
    let power = 0;
    //Ex: "BY" (77) -> [B] 2*(26^1) + [Y] 25*(26^0) = 77. It's a pseudo-base 26 number. Instead of powers of 10, we use powers of 26.
    for(let i = columnTitle.length - 1; i >= 0; i--){
        output += map[columnTitle[i]] * (26**power);
        power++;
    }
    return output;
};