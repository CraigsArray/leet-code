/**
 * @param {number[]} prices
 * @return {number}

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */
//Runtime: O(n)
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;  //edge case...can't profit with only 1 day
    
    let smallestBuy = prices[0];  //The smallest possible purchase up this this moment
    let profit = prices[1] - smallestBuy;  //Our baseline profit
    let maxProfit = profit;  //Set our max to our baseline
    for(let i = 1; i < prices.length; i++){
        profit = prices[i] - smallestBuy;  //At this index, proft = todaysPrice - cheapestPurchaseBeforeToday
        if(profit > maxProfit) maxProfit = profit; 
        if(prices[i] < smallestBuy) smallestBuy = prices[i];  //if today's price is cheaper, it's our new best time to buy
    }
    if(maxProfit < 0) return 0; //we only lost money...no profit
    return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
//Slow Method: Nested for loops but it does get smaller! So...a little slower than O(n^2)
 var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length - 1; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] - prices[i] > maxProfit) maxProfit = prices[j] - prices[i];
        }
    }
    return maxProfit;
};