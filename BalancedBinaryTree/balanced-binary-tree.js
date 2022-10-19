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
 var isBalanced = function(root) {
    var balanced = true;

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