/**
 * @param {number} x
 * @return {number}
 */
//per instrunctions, we just need to find the closest number without going over.
 var mySqrt = function(x) {
    if(x === 0) return 0;
    else if(x === 1) return 1;
    for(let i = 0; i <= x; i ++){
        if(i * i === x) return i; // nice, spot on
        else if(i * i > x) return i - 1; //too far! return previous num
         
    }
    
};