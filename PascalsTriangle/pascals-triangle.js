/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let tree = [];
    for(j = 0; j < numRows; j++){
        tree[j] = [];
        tree[j][0] = 1; //first number is always 1
        for(let i = 1; i < j; i++){
            
            tree[j][i] = tree[j-1][i-1] +  tree[j-1][i];    //sum of 2 numbers in previous row     
        }
        tree[j][j] = 1; //last number is always 1
        
    }
        
    return tree;
    
};