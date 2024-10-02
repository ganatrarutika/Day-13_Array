//Write a function findIndex that takes an array of numbers and a target number as 
//input and returns the index of the target number using the indexOf method.
function findIndex(arr,target){
    return arr.indexOf(target)
}
let num=[20,3,2,3,1,2,4]
let target=2
console.log(findIndex(num,target))