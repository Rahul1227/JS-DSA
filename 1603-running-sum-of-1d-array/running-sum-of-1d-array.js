/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(!nums) return null;
    let prefixSum = new Array(nums.length)
    prefixSum[0] = nums[0];
    for(let i=1; i<nums.length; i++){
        prefixSum[i] = nums[i] + prefixSum[i-1];
    }
    // console.log(prefixSum);
    return prefixSum;


    
};