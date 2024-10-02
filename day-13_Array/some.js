function hasAnyEvenNumber(numbers) {
    return numbers.some(number => number % 2 === 0);
}
let arr=[1,2,3,4,5,6]
console.log(hasAnyEvenNumber(arr))
let arr2=[1,3,5,7]
console.log(hasAnyEvenNumber(arr2))