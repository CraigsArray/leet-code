/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    //Build a tree with 3 pointers, left, right, mid
    var buildTree = function(nums, left, right){  
        //leaf node
        if(left > right) return null;
        //calculate new mid
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);
        //left side (for nums[0 -> mid])
        //new right is left is center
        node.left = buildTree(nums, left, mid - 1);
        //right side (for nums[mid -> end])
        //new left is right of center
        node.right = buildTree(nums, mid + 1, right);
        return node;        
    }
    let left = 0;
    let right = nums.length - 1;
    return buildTree(nums, left, right);
};