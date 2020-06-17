//Implementing array functions using class in javascript

class newarr{

    constructor(){
        this.length=0;
        this.data={};

    }

    get (index){

        return this.data[index];
    }
     

    push(item){

        this.data[this.length]=item;
        this.length ++;

        return this.length;
    }

    pop(){
         const lastitem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
       // return lastitem;
    }
     // have to write for delete as well

    

}

const newarr1=new newarr();
newarr1.push('hi');
newarr1.push('yes');
newarr1.push('yes2');
//console.log(newarr1.get(0));
//
newarr1.pop();
console.log(newarr1)