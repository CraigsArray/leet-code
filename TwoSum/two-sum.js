/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
//First solution that came to mind. Nested for loops allow us to search through the entire array testing each index with all other indeces.
//Brute force O(n^2)
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){  //Brute force means we are comparing every number against every other number...
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target) return [i,j]
        }
    }
};
//Hash map O(n)
var twoSumHash = function(nums, target){
    const map = {};

    for(let i = 0; i < nums.length; i++){
        const pairedNum = target - nums[i];  //pairedNum is a num where nums[i] + pairedNum = target
                                             //we query our map's keys to see if the number exists already
        if(map[pairedNum] !== null) return [map[pairedNum], i]  //we found pairedNum! Return both indeces
        map[nums[i]] = i;  //we didn't find it. curr number = nums[i]. We save the index, i, in map where key = number                      
    }
    return;
}