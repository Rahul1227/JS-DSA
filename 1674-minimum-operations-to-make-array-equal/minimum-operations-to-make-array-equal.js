/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let middleElement=0;
    let answer=0;
    if(n%2===0){
        let firstIndex=(n/2)-1;
        let secondIndex=(n/2);
        let firstElement=(2*firstIndex)+1;
        let secondElement=(2*secondIndex)+1;
        middleElement=(firstElement+secondElement)/2;
    }else{

        middleElement=(2*(--n/2)+1);

    }

    for(let i=0; i<n/2; i++){
        answer+=middleElement-((2*i)+1);
    }
    return answer;
    
};