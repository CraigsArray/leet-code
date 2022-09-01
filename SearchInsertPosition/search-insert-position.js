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
var searchInsert = function(nums, target) {
    if(nums == null || nums.length == 0) return 0; //edge cases
    
    let n = nums.length; //set up variables for left / right
	let l = 0;
	let r = n - 1;

    while(l < r){
        let m = Math.floor((l + (r - 1)) / 2);
        
        if(nums[m] == target) return m; //Lucky us, it was in the middle!
        else if (nums[m] < target) l = m + 1; //make new left just right of center
        else r = m - 1;  //make right just left of center
    }
    if (nums[l] < target) return l  + 1; //end result was right number
    else return l;  //end result was left number
};