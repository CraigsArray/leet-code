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
    var output = []; //container for our nodes to be stores
    recurseTree(root, output); //pass the container and root into our recursive function
    return output;
};

function recurseTree(curr, output){
    if(curr === null) return []; //edgecase, null input
    if(curr.left !== null){      //traverse left subtrees first
        recurseTree(curr.left, output);
    }
    output.push(curr.val)        //after left subtree, add curr val
    if(curr.right !== null){     //traverse right subtrees
        recurseTree(curr.right, output);
    }
}