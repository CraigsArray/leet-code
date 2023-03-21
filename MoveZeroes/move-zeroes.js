/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Runtime - O(n) Loops through array once
var moveZeroes = function(nums) {
    var length = nums.length - 1
    var i = 0
    var zeroCount = 0
    while(i < length){
        if(nums[i] == 0) {
            nums.splice(i, 1)
            zeroCount++
        }
        else{
            i++
        }
    }
    while(zeroCount > 0) {
        nums.push(0)
        zeroCount--
    }
    return nums
};