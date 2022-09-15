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
 var maxDepth = function(root) {
    var currMax = 0; //currentMax depth
    
    function traverse(curr, currDepth){       
        if(curr === null) return; //node doesn't exist
        
        currDepth++;  //Increase depth each time we traverse to a node
        traverse(curr.left, currDepth);   //Recurse down left subtree 
        traverse(curr.right, currDepth);  //Recurse down right subtree
        if(currDepth > currMax) currMax = currDepth; //replace currMax with biggest depth
    
    }
    traverse(root, 0);  //root node starts at 0 depth
    return currMax;
};