/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //Fibonacci - each step can be reached by the step before it, or two steps before it. Add those steps together
    let ways = [n]; //staircase is at least n long
    ways[0] = 1; //First 2 steps only have 1 way to get to them...
    ways[1] = 1;
    //Every step after those will be a sum of the ways to get to the 2 steps before it
    for(let i = 2; i <= n; i++) ways[i] = ways[i - 1] + ways[i - 2];
    return ways[n];
};