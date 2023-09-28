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
 /*
Description: Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node. 
*/
//Runtime - O(n)
var sumOfLeftLeaves = function(root) {
    var leftLeafSum = 0;

    var binaryTraverse = function(node, leftFlag){
        if(node === null) return;
        if(node.left === null && node.right === null && leftFlag === true){ //No children = leaf, leftFlag determines it was a left child
            leftLeafSum += node.val;
        }
        if(node.left === null && node.right === null) return;
        binaryTraverse(node.left, true);
        binaryTraverse(node.right, false);
    }
    binaryTraverse(root)
    return leftLeafSum;
};