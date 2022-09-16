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
//Note: Runtime on leetcode changed drastically with each run.
 var minDepth = function(root) {
    if(root === null) return 0; //invalid input
    let depths = [];  //array holding depths of all leaves
    function traverse(node, currDepth){
        if(!node) return;
        currDepth++;  //inc currDepth each time a new node is visited
        if(node.left === null && node.right === null) depths.push(currDepth);  //if node has no children, it's a leaf
        traverse(node.left, currDepth);
        traverse(node.right, currDepth);
              
    }
    traverse(root, 0);

    let minDepth = depths[0];  //could use Math.min but runtime was already slow enough
    for(let i = 0; i < depths.length; i++){
        if(depths[i] < minDepth) minDepth = depths[i];
    }
    return minDepth;
    
};