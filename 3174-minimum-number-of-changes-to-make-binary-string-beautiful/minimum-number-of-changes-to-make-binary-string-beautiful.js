/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let counter = 0;
    for( let i=1; i<s.length; i=i+2){
        if(s[i] !== s[i-1]){
            counter++;
        }
    }
    return counter;
    
    
};