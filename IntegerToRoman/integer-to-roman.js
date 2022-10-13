/**
 * @param {number} num
 * @return {string}
 * Given an integer, convert it to a roman numeral.
* Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 */
 //Runtime O(1);
 //Summary: Just gradually reducing the number. 
 var intToRoman = function(num) {
    let output = "";
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    Object.entries(map).forEach(([letter, value]) => {  //each element is a pair, deconstruct them into each variable
        while(num >= value){   //if num is bigger than value
            output += letter;  //add the letter and reduce it by that value
            num -= value;
        }
    });
    return output;
};

 //Long version - less memory
 //While loops occur when a letter can be repeated
 /*
 var intToRoman = function(num) {
    let output = "";
    while(num >= 1000){
        output += 'M';
        num -= 1000;
    }
    if(num >= 900){
        output += 'CM';
        num -= 900;
    }
    if(num >= 500){
        output += 'D';
        num -= 500;
    }
    if(num >= 400){
        output += 'CD';
        num -= 400;
    }
    while(num >= 100){
        output += 'C';
        num -= 100;
    }
    if(num >= 90){
        output += 'XC';
        num -= 90;
    }
    if(num >= 50){
        output += 'L';
        num -= 50;
    }
    if(num >= 40){
        output += 'XL';
        num -= 40;
    }
    while(num >= 10){
        output += 'X';
        num -= 10;
    }
    if(num === 9){
        output += 'IX';
        num -= 9;
    }
    if(num >= 5){
        output += 'V';
        num -= 5;
    }
    if(num === 4){
        output += 'IV';
        num -= 4;
    }
    while(num >= 1){
        output += 'I';
        num--;
    }
    return output;
};
*/