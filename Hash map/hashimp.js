class HashTable{
    constructor(size){
        this.data=new Array(size);
    }


_hash(key){  // hash function to get the address
    let hash=0;
    for(let i=0;i<key.length;i++){ 
        hash=(hash+key.charCodeAt(i)*i)%10
        console.log(hash)
    }
    return hash;
}

set(key,value){    // set the value of the address
    let address = this._hash(key);       
    if(!this.data[address]){
        this.data[address]=[];

    }
    this.data[address].push([key,value]);
    return this.data;
    
    
}  // 0(1)

get(key){

    let address=this._hash(key);   // key is the value stored 
    const currentBucket=this.data[address];    // fetching the address of the located data 
   // console.log(currentBucket)  
    if(currentBucket){    // or can use currentBuckey.length
        for(let i=0;i<currentBucket.length;i++){
                                                                                               // 0    1     //0    //1         
            if(currentBucket[i][0]===key){         //checking for data present at location 0 {[[grapes,100],['apple',2000]]}
               
                return currentBucket[i][1];    // returns the key present at position at location 1
            }
            return undefined;
        }
    }   // o(1) here because of 
}
    keys(){     // fetching all the values 
        const keysarry=[];
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){

              //  console.log(this.data[i][0][0]) i is data the 0 is the location of the data n case of multiple arrays in the location then the value presenent at the 0 location
                keysarry.push(this.data[i][0][0])
            }
        }
        return keysarry;
    }

    append(value){

        const newNode = {    // create a map with 2 values a value and a tail 
            value:value ,    
            next : null
        };
        this.tail.next=newNode;   // self refernece the node 
        this.tail=newNode;        // link a new node to the newnode
        this.length++;
    }

}

const myHashTable= new HashTable(50);
console.log(myHashTable._hash('grapes'));
console.log(myHashTable.set('apples',54));
console.log(myHashTable.set('mango',534));
console.log(myHashTable.set('banana',534));
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys());