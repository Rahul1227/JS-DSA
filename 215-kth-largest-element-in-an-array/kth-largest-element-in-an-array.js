/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(nums, a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

function partitionAlgo(nums, L, R) {
    let pivot = nums[L];
    let i = L + 1;
    let j = R;

    while (i <= j) {
        while (i <= R && nums[i] >= pivot) {
            i++;
        }
        while (j > L && nums[j] < pivot) {
            j--;
        }
        if (i < j) {
            swap(nums, i, j);
        }
    }
    swap(nums, L, j);
    return j;
}

var findKthLargest = function(nums, k) {
    let n = nums.length;
    let L = 0;
    let R = n - 1;
    
    while (L <= R) {
        let partitionIndex = partitionAlgo(nums, L, R);
        if (partitionIndex === k - 1) {
            return nums[partitionIndex];
        } else if (partitionIndex < k - 1) {
            L = partitionIndex + 1;
        } else {
            R = partitionIndex - 1;
        }
    }
};