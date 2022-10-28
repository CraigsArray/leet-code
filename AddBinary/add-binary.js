/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 var addBinary = function(a, b) {
    let sum = "";
    let carry = false;
    let size = a.length; //make strings same size
    if (b.length > a.length){
        size = b.length
        while(size > a.length) a = "0" + a;
    }
    else while(size > b.length) b = "0" + b; 
    for(i = size -1; i >= 0; i--){ //start from the right
        
        if(a[i] === "0" && b[i] ==="0"){ 
            if(carry === true) {
                sum = "1" + sum;
                carry = false;
            }
            else sum = "0" + sum;
        } 
        
        else if((a[i] === "1" && b[i] === "0") || (b[i] === "1" && a[i] === "0")){
            if(carry === true){
                sum = "0" + sum;
            }
            else sum = "1" + sum;
        } 
        
        else if(a[i] === "1" && b[i] ==="1"){
            if(carry === true){
                sum = "1" + sum;
                carry = true;
            }
            
            else {
                sum = "0" + sum;
                carry = true;
            }
        }
        if(i === 0 && carry === true) return "1" + sum;
    }
  return sum;
    
};