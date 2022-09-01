/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) return i;
        if(nums[i] < target && (nums[i + 1] > target || i + 1 === nums.length)) return i + 1;
    }
    return 0;
    
};