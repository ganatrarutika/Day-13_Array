// Write a function containsValue that takes an array of numbers and a target number as 
// input and returns true if the target number is present in the array using the includes method.
function containsValue(arr,target){
   return arr.includes(target)
}
let arr=[1,2,5,6,7,9]
let target=5
console.log(containsValue(arr,target))
