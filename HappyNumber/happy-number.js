/**
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
    1 Starting with any positive integer, replace the number by the sum of the squares of its digits.
    2 Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    3 Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let sum
    const sumSet = new Set();  //hold all sums encountered
    while(true){  //indefinite loop

        n = n.toString();  //easy way to separatae digits (could use % for faster speed but more convoluted)
        sum = 0;
        for(let i = n.length - 1; i >= 0; i--){ //take each digit, square it, add to sum
            sum += (parseInt(n[i])**2);  
        }
        //Loop exit conditions
        if (sum === 1) return true;  //Happy number
        if(sumSet.has(sum)) return false;  //Ruh roh, we are now in a repeating cycle
        else sumSet.add(sum);  //Not finished
        n = sum;  //New n is the prev sum
    }

};