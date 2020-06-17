class Node{
    constructor(value){
        this.value=value,
        this.next=null;
    }
}

class Stack{
    constructor(value){
        this.top=null,
        this.bottom=null,
        this.length=0;
    }

    peek(){

            return this.top;

    }

  
    push(value){

        const newNode =new Node(value);

        if(this.length === 0){             // check if stack is empty
                                
            this.top=newNode;                // insert value at top
            this.bottom=this.top;            // make the bottom equal to top
            //this.length++;
        }
        else{
            const holdingpointer=this.top;       // store the intial top value in a aholding pointer
            this.top=newNode;                    // insert the new node at the top
            this.top.next=holdingpointer;          // point the value of the top to the hlding pointer
        }
        this.length++;
        return this;



    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top===this.bottom){
            this.bottom=null;
        }
        const holdingpointer=this.top;
        const nextpointer=this.top.next;
        this.top=nextpointer;
        this.length--;
        return this;
    }
}

const Stack1 = new Stack();

//Stack1.peek();
//console.log(Stack1.peek());
console.log(Stack1.push(12));
console.log(Stack1.push(13));
console.log(Stack1.push(14));
console.log(Stack1.pop());
