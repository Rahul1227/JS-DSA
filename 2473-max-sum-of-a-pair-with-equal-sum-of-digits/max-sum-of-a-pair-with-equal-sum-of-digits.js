/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let map=new Map();
    let sumArr=nums.map(x=>{
        let sum=0;
        while(x){
            sum+=x%10;
            x=Math.floor(x/10);
        }
        return sum;
    })
    

    for(let i=0; i<sumArr.length; i++){
        if(!map.has(sumArr[i])){
            map.set(sumArr[i],[nums[i]]);
        }else{
            map.get(sumArr[i]).push(nums[i]);
        }
    }

    // console.log(map);

    let maxSum=-1;
    for(let [key, value] of map){
        if(value.length>=2){
            value.sort((a,b)=>b-a);
            let currentSum=value[0]+value[1];
            if(maxSum<currentSum){
            maxSum=currentSum;
        }

        }
        
    }
    return maxSum;


    
};