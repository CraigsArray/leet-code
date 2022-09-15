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
//First attempt - reusing sameTree problem but having q (right side) traverse right leaves first
var isSymmetric = function(root) {
    function traverse(p, q){
        if(p === null && q === null) return true;  //node doesn't exist in both trees
        if(p === null || q === null) return false; //node exists in one but not the other...
        if(p.val !== q.val) return false;  //nodes exist but don't have same values
        if(traverse(p.left, q.right) && traverse(p.right, q.left)) return true; //both subtrees need to be true
        else return false; //something was false             
    }
    return traverse(root.left, root.right);
  
}
