/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(n) Solution
//  var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] === target) return i;
//         if(nums[i] < target && (nums[i + 1] > target || i + 1 === nums.length)) return i + 1;
//     }
//     return 0;
    
// };

// O(log n) solution using BST
 var binarySearchInsert = function(nums, target) {
    if(nums == null || nums.length == 0) return 0; //edge cases
    
    let n = nums.length; //set up variables for left / right
	let l = 0;
	let r = n - 1;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) return i;
        if(nums[i] < target && (nums[i + 1] > target || i + 1 === nums.length)) return i + 1;
    }
    return 0;
    
};