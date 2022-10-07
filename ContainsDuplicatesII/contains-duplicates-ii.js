/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 */
 //Runtime: O(n) - loop through array once.
 var containsNearbyDuplicate = function(nums, k) {
    let seenMap = new Map();  //map is great here because RAM has a runtime of O(1) and we store both values and indicies
    for(let i = 0; i < nums.length; i++){

        if(seenMap.has(nums[i])){  //number was seen
            let j = seenMap.get(nums[i]);  //get the index of prev time num was seen
            if(Math.abs(i - j) <= k) return true;  //true condition
        } 
        seenMap.set(nums[i], i);  //we want to continually replace the index of the last time the num was seen
                                  //so that the difference between two occurences is as small as possible        
    }
    return false;  //never hit true condition
};