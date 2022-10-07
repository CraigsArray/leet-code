/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
 //Runtime: O(n) - loop through array once.
 var containsDuplicate = function(nums) {
    let seenSet = new Set();  //set is great here because RAM has a runtime of O(1)
    for(let i = 0; i < nums.length; i++){
        if(seenSet.has(nums[i])) return true;  //Check if already in set, O(1)
        seenSet.add(nums[i]);  //add to set
    }
    return false;  //never hit a duplicate
};