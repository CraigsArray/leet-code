/**
 * @param {number} x
 * @return {number}
 */
//per instrunctions, we just need to find the closest number without going over.
 var mySqrt = function(x) {
    if(x === 0) return 0;  //edgecase: 0^x is always 0
    else if(x === 1) return 1;  //edgecase: 1^x is always 1

    for(let i = 0; i <= x; i ++){
        if(i * i === x) return i; //Found exact root, nice!
        else if(i * i > x) return i - 1; //Square each i - when it overshoots x, return previous i      
    }
    
};