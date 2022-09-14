/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 //Note: Works but is messy. Can be refactored to a simpler code.
 var findMissingRanges = function(nums, lower, upper) {
    let missing = [];
    let currLow = lower;
    //Edge case: empty array
    if(nums.length === 0){
        if(upper === lower) return [lower.toString()];
        else return [lower.toString() + "->" + upper.toString()];
    } 

    
    for(i = 0; i < nums.length; i++){
        if(nums[i] !== currLow){    //2 Finger Compare with currLow and num[i]
            if(nums[i] !== currLow + 1){ //Missing a range of #s
                missing.push(currLow.toString() + "->" + (nums[i] - 1).toString());
            }
            else missing.push(currLow.toString()); //Only missing 1 number
            currLow = nums[i] + 1; //We missed a number, so we set the new low
        }
        else currLow++; //if numbers are same, increment them together
        
    }
    if(nums[nums.length - 1] !== upper){
        if(nums[nums.length - 1] + 1 === upper) missing.push((nums[nums.length - 1] + 1).toString());
        else missing.push((nums[nums.length - 1] + 1).toString() + "->" + upper);
    }

    return missing;
}