/**
 * @param {number[]} nums
 * @return {number}
 */
//Rumtime: O(2n) -> O(n)
var missingNumber = function(nums) {
    var map = {};
    for(var i = 0; i < nums.length; i++){
        map[nums[i]] = true;
    }
    for(i = 0; i < nums.length; i++){
        //look into our map to see which value is missing
        if(map[i] == undefined) return i;
    }
    //Edge case - missing number is last number
    return nums.length
};