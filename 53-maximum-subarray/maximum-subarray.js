/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums) return null;
    let result=Number.MIN_SAFE_INTEGER;
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
        if(sum>result) result=sum;
        if(sum<0) sum=0;
    }
    return result;
    
};