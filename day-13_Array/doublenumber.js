// Write a function doubleNumbers that takes an array of numbers as 
// input and returns a new array where each number is doubled.
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]
let num = [1,2,3,4]
function doubleNumbers(arr){
  return arr.map((element)=> element * 2)
}
console.log(doubleNumbers(num))