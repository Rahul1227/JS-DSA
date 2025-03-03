/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    if(!nums) return [];
    let less=[];
    let equal=[];
    let greater=[];

    nums.forEach(num=>{
        if(num < pivot){
            less.push(num);
        }else if(num > pivot){
            greater.push(num);
        }else{
            equal.push(num);
        }
    })

    return [...less, ...equal, ...greater];
    
};