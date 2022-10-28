/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    //Algo - Loop through array. If distance to next node is > 1, don't include in current range
    let output = [];
    let range = "";
    for(let i = 0; i < nums.length; i++){
        if(range === ""){  //empty string, fill it
            range = nums[i].toString();
        }
        if((nums[i + 1] - nums[i]) > 1 || i + 1 === nums.length){  //distance to next element is greater than 1 OR we reached the end of the array
            if(nums[i].toString() !== range) range += "->" + nums[i].toString();  //range is more than just 1 number
            output.push(range);
            range = "";
            }
        }
    return output;
    
};


/*
 var summaryRanges = function(nums) {
    //Algo - Loop through array. If distance to next node is > 1, don't include in current range
    let output = [];  //array of strings
    let range = "";  //holds each range
    for(let i = 0; i < nums.length; i++){
        if(range === ""){  //starting a range
            range = nums[i].toString();  //give it the current value
            if((nums[i + 1] - nums[i]) > 1 || i + 1 === nums.length){                
                output.push(range);
                range = "";
            }
        }
        else if((nums[i + 1] - nums[i]) > 1 || i + 1 === nums.length){
            range += "->" + nums[i].toString();
            output.push(range);
            range = "";
            }
        }
    return output;
    
};*/