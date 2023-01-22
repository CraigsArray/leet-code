/**
 * @param {number[]} nums
 * @return {number}
 */
//First solution - sorting then comparing: O(n*logn)
 var singleNumber = function(nums) {
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if ((nums[i] !== nums[i - 1]) && (nums[i] !== nums[i + 1])) return nums[i];
    }
};

//Hash map: O(n)
var singleNumberHash = function(nums) {
    hash = {}; //New object for our hash table

    for(let i = 0; i < nums.length; i++){
        let val = nums[i];  //number
        if(hash[val] !== undefined) delete hash[val];  //if it already exists in table, delete it
        else hash[val] = val;  //otherwise add it
    }
    //Only one number will remain, and it lives as the last/only key in hash
    return Object.keys(hash)[0];
};