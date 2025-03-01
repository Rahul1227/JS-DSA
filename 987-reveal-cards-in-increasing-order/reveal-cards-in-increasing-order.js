/**
 * @param {number[]} deck
 * @return {number[]}
 */
class customQueue{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.items.shift();
    }

    isEmpty(){
        return (this.items.length===0)
    }

    top(){
        return this.items[0];
    }

    print(){
        console.log(this.items);
    }
}


var deckRevealedIncreasing = function(deck) {
    let queue=new customQueue();
    let size=deck.length;

    for(let i=0; i<size; i++){
        queue.push(i);
        
    }
    let sortedDeck=deck.sort((a,b)=>a-b);
    let result=[];

    for(let i=0; i<size; i++){
        let ind=queue.pop();
        result[ind]=sortedDeck[i];


        if(!queue.isEmpty()){
            let nextInd=queue.pop();
            queue.push(nextInd);
        }
    }

    return result;
    
};