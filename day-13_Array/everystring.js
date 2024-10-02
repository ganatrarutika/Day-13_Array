/*Write a function areAllStringsLong that takes an array of strings as input and 
returns true if all strings in the array have a length greater than 5 characters using the every method.*/
function areAllStringsLong(arrofstr){
    return arrofstr.every((element) => element.length > 5)
}
let arr = ["urvisha","dhruvisha","jigisha"]
console.log(areAllStringsLong(arr))
let arr2 = ["raj","urvi","minu"]
console.log(areAllStringsLong(arr2))
