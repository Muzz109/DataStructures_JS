let user={
    age: 54,
    name:'Kyle',
    magic: true,
    scream:function(){
        console.log("scream");
    }

}

console.log(user.name) //0(1)
user.spell="abracadabra";  //0(1)
console.log(user) //0(1)

let a = new Map();
let b =new set();
