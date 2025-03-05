/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */

function isSubsequence(s, p) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < p.length) {
        if (s[i] === p[j]) {
            j++;
        }
        i++;
    }
    return j === p.length;
}

var maximumRemovals = function(s, p, removable) {
    let left = 0;
    let right = removable.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let newS = s.split('');
        
        // Remove characters
        for (let i = 0; i < mid; i++) {
            newS[removable[i]] = '';
        }
        
        newS = newS.join('');
        
        if (isSubsequence(newS, p)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};