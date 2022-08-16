/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]){ //cycle through the array, and verify that 2 adjacent numbers are not equal
            i++;
            nums[i] = nums[j];
        } 
    }
    i++;
    return i;
};