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
 * @return {number}
 */
//  222. Given the root of a complete binary tree, return the number of the nodes in the tree.
//  Complexity: O(n)
var countNodes = function(root) {
    var count = 0;
    var traverse = function(node){
        if(node === null) return;
        count++;
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return count;
};