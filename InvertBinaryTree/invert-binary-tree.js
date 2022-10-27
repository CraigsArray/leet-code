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
        if(!node) return null;  //went past a leaf
        let swapLeft = node.left;  //temp holds left
        let swapRight = node.right;  //temp holds right
        node.left = swapRight;  //make the swap
        node.right = swapLeft;
        traverse(node.left);  //continue down left and right sides of tree
        traverse(node.right);
        
    }
    traverse(root);
    return root;
};