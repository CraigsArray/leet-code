/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let output = parseInt(x.toString().split("").reverse().join(""))
    if(output > (2**31-1) || output < ((-2)**31)) return 0;
    if(x < 0) return (output * -1);
    return output;
};