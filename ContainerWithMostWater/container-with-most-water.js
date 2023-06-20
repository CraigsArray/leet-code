/**
 * @param {number[]} height
 * @return {number}
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 */

//Runtime: O(n)
//Explanation: 2 Finger Approach, one for each side of the bucket
//Move finger for the shorter wall and compare with previous max
var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;
    var maxWater = 0;
    while(left < right){
        maxWater = Math.max(maxWater, ((right - left) * Math.min(height[left], height[right])));
        if (height[left] < height[right]) left++;
        else right--;
      }
    

    return maxWater;
};