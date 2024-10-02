// Write a function containsString that takes an array of strings and a target 
// string as input and returns true if the target string is present in the array using the includes method.
function containsString(arr,str){
    return arr.includes(str)
}
let arr=['urvisha','dhruvisha','jigisha']
let str='urvisha'
console.log(containsString(arr,str))
