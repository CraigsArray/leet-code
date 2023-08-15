/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // 349. Intersection of Two Arrays
 // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 // Create a set, create another set of like items, change to array.
 var intersection = function(nums1, nums2) {
    var set1 = new Set();
    var set2 = new Set();
    var output = [];
    for(var i = 0; i < nums1.length; i++){
        set1.add(nums1[i]);
    }
    for(var i = 0; i < nums2.length; i++){
        if(set1.has(nums2[i])) set2.add(nums2[i]) 
    }
    for(var [entry, value] of set2.entries()){
        output.push(entry);
    }
    return output;
};  