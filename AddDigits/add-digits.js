/**
 * @param {number} num
 * @return {number}
 */
//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
var addDigits = function(num) {
    while(num >= 10 || num <= -10){  //While num has 2 or more digits
        var numArray = num.toString().split(''); //Convert into an array of nums
        num = numArray.reduce((acc, num) => {  //Add those nums together
            return acc + parseInt(num);
        }, 0)
    }
    return num;
};