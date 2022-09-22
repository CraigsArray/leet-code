/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums of size n, return the majority element.
   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */
//Solution with hash map. Feel like the end is a bit convoluted but can always revisit.
//Hash map stores numbers as keys, and their frequence as values
//Runtime...is O(2n) -> O(n)
 var majorityElement = function(nums) {
    let map = {};
    
    for(i = 0; i < nums.length; i++){
        if(map[nums[i]] === undefined) map[nums[i]] = 1;  //first occurence, set value to 1
        else map[nums[i]]++;  //every other occurence, increment value
    }
    let currMax = 0;
    let ans = nums[0];
    for (let key in map){  //find the key with the largest value
       if(map[key] >= currMax){
           currMax = map[key];
           ans = key;
       } 
    }
   return ans;
};

//Slower easier method, O(n*logn)
var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);  //sort the array, small to big
    return nums[Math.floor(nums.length/2)];  //because there are at least nums/2 occurences, the majority element will be in the middle of the array
}; 