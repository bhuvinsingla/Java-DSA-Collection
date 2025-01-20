/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const index = new Array(arr.length + 1).fill(0);
    arr.forEach((val, i) => index[val] = i);

    // Track the maximum index for each row and column
    const row = new Array(mat.length).fill(0);
    const col = new Array(mat[0].length).fill(0);

    // Iterate over the entire matrix
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            row[r] = Math.max(row[r], index[mat[r][c]]);
            col[c] = Math.max(col[c], index[mat[r][c]]);
        }
    }

    // Find the minimum index among rows and columns
    let res = arr.length;
    [...row, ...col].forEach(val => res = Math.min(res, val));

    return res;
};
