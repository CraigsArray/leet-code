/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    let j = 0;
    for(let i=0;i<haystack.length;i++){
        while(haystack[i + j] === needle[j]){  //Treat as an if statement that looks at the starting letter of needle to the last letter when it finds it
            if(j === needle.length - 1) return i; //we found all the letters!
            j++;
        }
        j = 0;      //didn't find letters, reset our counter to zero to look at first letter again
    }
    return -1;
};