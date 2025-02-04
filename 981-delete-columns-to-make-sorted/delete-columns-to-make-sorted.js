/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(words) {
    let j=0;
    let counter=0;
    while(j<words[0].length){
        for(let i=1; i<words.length; i++){
            if(words[i].charAt(j)<words[i-1].charAt(j)){
                counter++;
                break;
            }
        }
        j++;
    }

    return counter;
    
};