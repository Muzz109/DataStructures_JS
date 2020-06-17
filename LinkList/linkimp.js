//10-->5--->16

// let myLinkedList = {
 
//  head:{
//    value: 10        // any value you want
//    next: {

//      value:5,
//      next:{
//        value:16
//        next: null
//      }
//     }      // poniter to next noe
//  }

// }
class Node {
    constructor(value){
      this.value,
      this.next =null
    }
  }
  
  
  class Linklist{
  
  constructor(value){
  
    this.head= {
      value:value,
      next:null // when we first create it will be null
    }
    this.tail=this.head; // when we first create the head is the tail
    this.length=1;
  }
  
  append(value){
    
    const newNode ={
      value:value,
      next:null
    }
    this.tail.next=newNode; // tail to point to newnode
    this.tail=newNode;
    this.length++;
    return this; // 
  }
  
  prepend(value){
  
    let newNode={
      value:value,
      next:null
    }
    newNode.next=this.head; // assign the prepend node link to this.head
    this.head=newNode;   // assign the head to new node
    this.length++;
    return this;
  
  }
  
  insert(index,value){
  
  
  }
   printList(){
     const arry=[];
    let currentNode=this.head;
    while(currentNode !== null){
  
     arry.push(currentNode.value);
     currentNode=currentNode.next;
    }
    return arry;
   }
  
   insert(index,value){
     // check params
     if(index >= this.length){  // if length exceeds do append
  
       return this.append(value);
     }
     const newNode={   // create a new node
       value:value,
       next:null
     };
    const leader = this.traversetoIndex(index-1);  //we choose index-1 as we have to add 1 value before the index
    // the above function is used to fetch the node at index-1 so we can add the new node
    const holdingPointer =leader.next // create a temp variable to store the next node value so we point it again to keep continuity
    leader.next = newNode; 
    newNode.next = holdingPointer;
    this.length++
    return this.printList();
    
   }
   traversetoIndex(index){
     let counter=0;
     let currentnode = this.head;
     while(counter!==index){
  
       currentnode=currentnode.next;
       counter++;
  
     }
     return currentnode;
   }
  
   remove(index){
     // check param
     const leader = this.traversetoIndex(index-1);
     const unwantedNode = leader.next;   // store the value 
     leader.next = unwantedNode.next;   // point the pointer to the next value pointer
     this.length--;
     return this.printList(); 
   }
  
  }
  const myLinkList = new Linklist(10);
  myLinkList.append(5);
  myLinkList.append(16);
  myLinkList.prepend(1)
  myLinkList.printList();
  myLinkList.insert(2,30)
  myLinkList.remove(2)
  console.log(myLinkList)