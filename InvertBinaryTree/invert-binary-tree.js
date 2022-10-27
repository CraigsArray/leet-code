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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    
    var traverse = function(node){
        if(!node) return null;
        let swapLeft = node.left;
        let swapRight = node.right;
        node.left = swapRight;
        node.right = swapLeft;
        traverse(node.left);
        traverse(node.right);
        
    }
    traverse(root);
    return root;
};