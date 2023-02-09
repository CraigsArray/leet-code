/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    //1 is an ugly number
    if(n == 1) return true;
    //Reduce the number to the prime conditions
    while(n % 5 == 0 && n > 5){
        n = n / 5
    }
    while(n % 3 == 0 && n > 3){
        n = n / 3
    }
    while(n % 2 == 0 && n > 2){
        n = n / 2
    }
    //Verify the reduced number is still only one of the primes in the conditions
    return (n == 2) || (n == 3) || (n == 5)
};