//First solution that came to mind. Nested for loops allow us to search through the entire array testing each index with all other indeces.
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target) return [i,j]
        }
    }
};