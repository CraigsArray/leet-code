/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    var preorder = [];
    
    function traverse(node){
        if(!node) return;
        preorder.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return preorder;
};