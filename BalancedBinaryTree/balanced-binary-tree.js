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
 * Given a binary tree, determine if it is height-balanced.
   For this problem, a height-balanced binary tree is defined as:
     a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 * Runtime: O(n)
 */
 var isBalanced = function(root) {
    var balanced = true;  //Flag

    var traverse = function(node, depthLeft, depthRight){
        if(!node) return null;    
        
        depthLeft = traverse(node.left);
        depthRight = traverse(node.right);
        if(Math.abs(depthLeft - depthRight) > 1) balanced = false;
        return Math.max(depthLeft, depthRight) + 1;
        
    }
    traverse(root);
    return balanced;
};