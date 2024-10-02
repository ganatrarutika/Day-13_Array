// Write a function printSquare that takes an array of numbers as input and prints the square of each number.
// Input: [1, 2, 3, 4]
// Output: [1, 4, 9, 16]

function printSquare(arr){
     let arr2 = []
     arr.forEach((element,index) =>{ 
     let sq= element * element
     arr2.push(sq)
   
    });
    return arr2
}
let arr = [1,2,3,4]
console.log(printSquare(arr))