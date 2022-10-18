
var TwoSum = function() {
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(this.values) this.values.push(number);
    else{
        this.values = [number];
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    if(!this.values) return false;
    const map = {};
    for(let i = 0; i < this.values.length; i++){
        let pairedNum = value - this.values[i];
        if(map[pairedNum] === true) return true;
        else{
            map[this.values[i]] = true;
        }
        
    }

   
    return false;
    
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

//First attempt - LOL <5% speed
/*
var TwoSum = function() {
};
TwoSum.prototype.add = function(number) {
    if(this.values) this.values.push(number);
    else{
        this.values = [number];
    }
};
TwoSum.prototype.find = function(value) {
    //if(this.values[0] === null) return false;
    if(!this.values) return false;


    let target = value;
    let nums = this.values;
    for(var i = 0; i < nums.length; i++){  
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target) return true;
        }
    }
    return false;
    
};
*/