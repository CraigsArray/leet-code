/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 1;
    for (let j = 1; j < nums.length; j++) { //we are comparing two numbers side by side
        if (nums[j] != nums[i]){ //if 
            i++;
            nums[i] = nums[j];
        } 
    }
    i++;
    return i;
};