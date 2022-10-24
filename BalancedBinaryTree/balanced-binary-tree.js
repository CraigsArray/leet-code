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
    var traverse = function(node, depthLeft, depthRight){  //DepthFirstSearch
        if(!node) return null;  //went past a leaf node
        depthLeft = traverse(node.left);  //traverse left
        depthRight = traverse(node.right);  //traverse right
        if(Math.abs(depthLeft - depthRight) > 1) balanced = false;  //if difference is greater than 1, not balanced
        return Math.max(depthLeft, depthRight) + 1;  //"depth" here is the height, so leaf nodes start at 0 and then add one each return upwards        
    }
    traverse(root);
    return balanced;
};