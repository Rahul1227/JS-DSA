/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Should return `false` if lengths are not equal
    if (s.length !== t.length) return false;

    let letterArray = new Array(26).fill(0);

    // Increment counts for characters in s
    for (let i = 0; i < s.length; i++) {
        letterArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Decrement counts for characters in t
    for (let i = 0; i < t.length; i++) {
        letterArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // Calculate the sum of the array to check if all counts return to zero
    let sum = 0;
    letterArray.forEach(num => {
        sum += Math.abs(num);  // Use absolute value to ensure that positives and negatives do not cancel out
    });

    // If sum is zero, all counts are balanced and the strings are anagrams
    return sum === 0;
};