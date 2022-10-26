/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let output = parseInt(x.toString().split("").reverse().join(""));  //toString, toArray, reverse, toString, toInt
    if(output > (2**31-1) || output < ((-2)**31)) return 0;  //too big or small
    if(x < 0) return (output * -1);  //get the sign
    return output;
};