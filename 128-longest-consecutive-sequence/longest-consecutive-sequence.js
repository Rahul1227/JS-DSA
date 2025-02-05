// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {
//     let hashMap=[];
//     for(let i=0; i<nums.length; i++){
//         hashMap[nums[i]]=1;
//     }

//     let maxSequenceLength=0;
//     let counter=0;

//     for(let i=0; i<hashMap.length; i++){
//         if(hashMap[i]===1){
//             counter++;
//         }else{
//             if(maxSequenceLength<counter){
//                 maxSequenceLength=counter;
//                 counter=0;
//             }
//         }
//     }
//     if(maxSequenceLength===0){
//         maxSequenceLength=counter;
//     }

//     return maxSequenceLength;
    
// };


var longestConsecutive = function(nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = true;
    }

    let maxSequenceLength = 0;

    for (let num in hashMap) {
        // Check if it's the start of a sequence
        if (!hashMap[num - 1]) {
            let currentNum = Number(num);
            let counter = 0;

            while (hashMap[currentNum]) {
                counter++;
                currentNum++;
            }
            
            maxSequenceLength = Math.max(maxSequenceLength, counter);
        }
    }

    return maxSequenceLength;
};