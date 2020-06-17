class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
constructor(){
    this.root = null;
}

insert(value){

    const newNode= new Node(value);

    if(this.root === null){
        this.root = newNode;
    }
    else{
    let currentnode=this.root;
      
    while(true){
       // left
        if(value < currentnode.value){

            if(!currentnode.left){
                currentnode.left=newNode;
                return this;
            }
            currentnode=currentnode.left;
        }
        else {
          

            if(!currentnode.right){

                currentnode.right=newNode;
                return this;
            }

            currentnode=currentnode.right;
        
        }
    }

    }

    //return this;
}

lookup(value){
    if(!this.root){

        return false;
    }
    let currentnode=this.root;

    while(currentnode){

        if(value < currentnode.value){
             
            currentnode=currentnode.left;

        }else if(value > currentnode.value){

            currentnode=currentnode.right;

        }else if(currentnode.value=== value){

            return currentnode;
        }
    }

    return null;
}



}

const tree =new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(5)
tree.insert(6)

console.log(tree.lookup(6))