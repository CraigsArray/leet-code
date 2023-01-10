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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var node = root;
    var paths = [];
    var traverse = function(node, currPath){
        if(node == null){           
            return;
        };
        if(node !== root) currPath += "->" + node.val.toString(); 
        if(node.left == undefined && node.right == undefined){
            paths.push(currPath);
            return;
        }
        traverse(node.left, currPath); 
        
        traverse(node.right, currPath);
        
        
    }

    traverse(root, root.val.toString());

    return paths;
};