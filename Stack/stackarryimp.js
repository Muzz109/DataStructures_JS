class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.array = [];
    }
    peek(){

        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop()
        return this;
    }

}

const MyStack = new Stack();

console.log(MyStack.peek())
console.log(MyStack.push('udemy'))
console.log(MyStack.push('google'))
console.log(MyStack.push('yahoo'))
console.log(MyStack.pop())