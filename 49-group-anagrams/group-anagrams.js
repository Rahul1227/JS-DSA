/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length === 0) return [];

    let sortedArr = strs.map(str => str.split('').sort().join(''));
    let map = new Map();

    for (let i = 0; i < sortedArr.length; i++) {
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], [strs[i]]);
        } else {
            map.get(sortedArr[i]).push(strs[i]);
        }
    }

    return Array.from(map.values());
};
