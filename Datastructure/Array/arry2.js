
//instantiation

class player{
    
    constructor(name,age){

        console.log(this);
        console.log(`player`,this);  //writing to check the 
        this.name=name;
        this.age=age;
    }
    introduce(){

        console.log(`my name is ${this.name},and my age is ${this.age}`);
    }

      
}

class magic extends player{

    constructor(name,age){
        super (name,age)          // always write after calling the super 
          console.log(`magic`,this);
        
    }
        play() {

            console.log(`my name is ${this.name} and age is ${this.age}`)
        }
    }


const magic1=new magic('muj','24');
magic1.play()
magic1.introduce()