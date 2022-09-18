/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let triangle = [];  //initialize our triangle
    triangle[0] = [1];  //start first row
    triangle[1] = [1,1];  //starget second row 
    for(let i = 2; i <= rowIndex; i++){ //begin our loop at 3rd row
        triangle[i] = [];
        triangle[i][0] = 1;  //first index always 1
        for(let j = 1; j <= i; j++){
            
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];  //sum of 2 above it            
        }
        triangle[i][i] = 1;  //last index always 1
    }
    return triangle[rowIndex];
};