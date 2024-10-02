// Write a function areAllPositive that takes an array of numbers as input and returns true if all 
// numbers in the array are positive using the every method.
function areAllPositive(arr){
    return arr.every(element => element >0)
}
let a1=[1,2,3,4,5,6,7]
console.log(areAllPositive(a1))
let a2=[1,-2,1,3,2]
console.log(areAllPositive(a2))