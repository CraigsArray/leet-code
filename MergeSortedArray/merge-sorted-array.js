/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    m -= 1; //change to index of last value
    n -= 1; 
    for(let i = nums1.length - 1; i >= 0; i--){
        //one of the arrays is empty, use other
        if (m < 0){
            nums1[i] = nums2[n];
            n--;
        } 
        else if (n < 0){
            nums1[i] = nums1[m];
            m--;
        } 
        //2 finger compare with fingers being: m, n
        else if(nums1[m] >= nums2[n]){
            nums1[i] = nums1[m];
            m--;
        }
        else{
            nums1[i] = nums2[n];
            n--;
        } 
    }
    
};