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
 * @return {number[]}
 */

 var inorderTraversal = function(root) {
    let output = [];
    
    function recurseTree(curr){
        if(curr === null) return; //edgecase, null input
        recurseTree(curr.left);   //Recurse down left subtree 
        output.push(curr.val)     //Add curr node
        recurseTree(curr.right);  //Recurse down right subtree
    
    }
    recurseTree(root); 
    return output;
};

