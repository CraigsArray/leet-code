/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    var left = [];
    var right = [];
    
    function traverse(curr, order){
        if(curr === null) return;
        traverse(curr.left);
        order.push(curr.val);
        traverse(curr.right);      
        
    }
    traverse(root.left, left);
    traverse(root.right, right);
    for(let i = 0; i < left.length; i++){
        if(left[i] !== right[i]) return false;
    }
    return true;   
};