/**
* @param {number[]} nums
* @return {number}
*/
var countBadPairs = function(nums) {
    let n = nums.length;
    let totalCombination = ((n * (n - 1)) / 2);
    let goodPair = 0;
    let freqMap = new Map();
    for (let i = 0; i < n; i++) {
        let diff = nums[i] - i;
        if (freqMap.has(diff)) {
            goodPair += freqMap.get(diff);
        }
        freqMap.set(diff, (freqMap.get(diff) || 0) + 1);
    }

    return totalCombination - goodPair;
};