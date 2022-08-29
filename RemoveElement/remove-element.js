/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0;                              //i tracks how many elements we remove
    for(let j = 0; j < nums.length; j++){   //j loops through array
        if(nums[j] !== val){                //if the selected element is not val, 
            nums[i] = nums[j];              //we move it to the front of the array and 
            i++;                            //increment what is the "end" of the front array
        }    
    }
    
    return i;
}
