



let arry1= ['0','3','4','31'];
let arry2= ['4','6','30'];

function mergsort(arry1,arry2){
let mergaary=[];
let i=1;
let j=1;
let arry1item = arry1[0];
let arry2item = arry2[0];


if(arry1.length === 0){
    return arry2;
}
if(arry2.length === 0){
    return arry1;
}
 while(arry1item || arry2item )
 {
    console.log(arry1item,arry2item)

    if( !arry2item || arry1item < arry2item ){
      
        mergaary.push(arry1item);
        arry1item = arry1[i];
        i++;
    }
    else{

        mergaary.push(arry2item);
        arry2item =arry2[j];
        j++;
    }
 }
 return mergaary;

}

console.log(mergsort(arry1,arry2));