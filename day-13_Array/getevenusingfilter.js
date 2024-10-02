// Write a function getEvenNumbers that takes an array of numbers as 
// input and returns a new array containing only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
function getEvenNumbers(arr){
    return arr.filter(element => element % 2 == 0)
}
let arr1 = [1,2,3,4,5,6]
console.log(getEvenNumbers(arr1))