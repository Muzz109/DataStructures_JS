const array1 = ['a','b','c','d'];

console.log("initial array",array1);

array1.pop('b');
console.log(array1);

array1.push('e');  //pushing one element into array //0(1)
console.log(array1)

array1.unshift('x');   // adding 'x' at first poition of array make the array shift by one position 0(n)
console.log(array1)

array1.splice(3,2,'arrayinsert');   // 2 is the number of deletions from the address (1st parm)  0(n/2)

console.log(array1)

