/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums || nums.length === 0) return 1;

    nums = nums.filter(num => num > 0);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]) - 1;
        if (num < n && nums[num] > 0) {
            nums[num] = -nums[num];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
};
