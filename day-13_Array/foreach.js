//Write a function printSquare that takes an array of numbers as 
//input and prints the square of each number using the forEach method.
function printSquare(arr){
   arr.forEach((element) => {
   console.log( element * element)
});
}
let array=[1,2,3,4]
console.log(printSquare(array))

