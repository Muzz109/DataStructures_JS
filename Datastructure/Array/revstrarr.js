

let str='my name is slim shady';

function revstr(str){

    const arry = [];
    const totlength = str.length - 1;
    for(let i= totlength;i>=0;i--){ 
      
        arry.push(str[i]);
    }  

   console.log(arry)
     return arry.join('');
    //return arry.toString();
}


// function revstr2(str){

//     return str.split('').reverse().join('');
// }


// const reverse3 =str =>str.split('').reverse().join();


//revstr('my name is slim shady');
let value = revstr('Hi my name is Mujtaba');
console.log(value);
//revstr2(str);
//revstr3(str);
//console.log(revstr2(str));