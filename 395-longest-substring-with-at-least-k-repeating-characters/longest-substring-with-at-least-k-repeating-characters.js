/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s.length < k) return 0;
    
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let splitChar = null;
    for (let [char, count] of charCount) {
        if (count < k) {
            splitChar = char;
            break;
        }
    }
    
    if (splitChar === null) return s.length;
    
    let substrings = s.split(splitChar);
    return Math.max(...substrings.map(substr => longestSubstring(substr, k)));
};