/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefixSum = new Array(gain.length +1);
    prefixSum[0] = 0;
    for(let i=0; i<gain.length; i++){
        prefixSum[i+1] = prefixSum[i] + gain[i];
    }

    let max = Math.max(... prefixSum);
    // console.log(max);
    return max;
    
};