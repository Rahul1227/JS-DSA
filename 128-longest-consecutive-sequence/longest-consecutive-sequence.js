/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hashMap=new Map();
    let maxCounter=0;

    for(let i=0; i<nums.length; i++){
        hashMap.set(nums[i],1);
    }


    hashMap.forEach((value,key)=>{

        if(!hashMap.has(key-1)){
        let counter=0;
        

        while(hashMap.has(key++)){
            counter++;
        }

        if(counter>maxCounter){
            maxCounter=counter;
        }
    }

    })

    return maxCounter;
    
};