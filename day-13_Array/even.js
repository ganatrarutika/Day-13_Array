/*Write a function getEvenNumbers that takes an array of numbers as input
and returns a new array containing only the even numbers using the filter method.*/

function getEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumbers = getEvenNumbers(numbers);
  console.log(evenNumbers); 