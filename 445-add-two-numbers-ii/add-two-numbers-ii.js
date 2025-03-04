/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }else{
           return this.items.pop();
        }
    }

    isEmpty(){
        return (this.items.length === 0);
    }

    print(){
        console.log(this.items);
    }
}

var addTwoNumbers = function(l1, l2) {
    let stack1 = new Stack();
    let stack2 = new Stack();
    let temp1=l1;
    let temp2=l2;

    while(temp1){
        stack1.push(temp1.val);
        temp1=temp1.next;
    }

    while(temp2){
        stack2.push(temp2.val);
        temp2=temp2.next;
    }
    // stack2.print();

    let result = [];
    let carry = 0;

    while (!stack1.isEmpty() || !stack2.isEmpty() || carry > 0) {
        let sum = carry;
        
        if (!stack1.isEmpty()) {
            sum += stack1.pop();
        }
        if (!stack2.isEmpty()) {
            sum += stack2.pop();
        }

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        result.push(digit);
    }

    let newResult = result.reverse();

    let resultHead = new ListNode(newResult[0]);
    let temp = resultHead;

    for(let i = 1; i < newResult.length; i++){
        let newNode = new ListNode(newResult[i]);
        temp.next = newNode;
        temp = temp.next;
    }

    return resultHead;



   



        
        

    
};