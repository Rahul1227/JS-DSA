/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numSet=new Map();
    let result=[];
    let len=nums.length;

    for(let i=0; i<len; i++){
        let diff=target-nums[i];
        if(numSet.has(diff)){
            result.push(i);
            result.push(numSet.get(diff));
            break;
        }
        numSet.set(nums[i],i)
    }
    return result;
    
};