/**
 * @param {number[]} height
 * @return {number}
 */
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