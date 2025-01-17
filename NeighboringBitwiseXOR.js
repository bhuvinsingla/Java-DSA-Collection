/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    // Step 1: Initialize XOR accumulator
    let xr = 0;

    // Step 2: Compute XOR of all elements in the derived array
    for (const x of derived) {
        xr ^= x;
    }

    // Step 3: Return true if XOR is 0, otherwise return false
    return xr === 0;
};
