//1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
  
    return true; 
  }
  
  function checkFirstElement(arr) {
    if (arr.length === 0) {
      return "The array is empty";
    }
  
    let firstElement = arr[0];
  
    if (isPrime(firstElement)) {
      return `${firstElement} is a prime number`;
    } else {
      return `${firstElement} is not a prime number`;
    }
  }
  
  let myArray = [7, 2, 3, 4, 5];
  let result = checkFirstElement(myArray);
  console.log(result);  
  

  //2.  Write a JavaScript program to find the most frequent item of an array
  
  function findMostFrequentItem(arr) {
    if (arr.length === 0) {
      return "The array is empty";
    }
  
    // Create an object to store the count of each item
    let itemFrequency = {};
  
    // Iterate through the array to count occurrences
    arr.forEach(item => {
      itemFrequency[item] = (itemFrequency[item] || 0) + 1;
    });
  
    // Find the item with the maximum frequency
    let mostFrequentItem;
    let maxFrequency = 0;
  
    for (let item in itemFrequency) {
      if (itemFrequency[item] > maxFrequency) {
        mostFrequentItem = item;
        maxFrequency = itemFrequency[item];
      }
    }
  
    return mostFrequentItem;
  }
  
  // Example usage:
  let myArrays = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];
  let mostFrequent = findMostFrequentItem(myArrays);
  console.log(`The most frequent item is: ${mostFrequent}`);  // Output: 2
  
  //3.  Write a JavaScript program to find the most frequent item of an array

  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }

  4// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

  function sumOfSquares(arr) {
    let sum = 0;
  

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
  
    return sum;
  }
  
  
  let myArrayys = [1, 2, 3, 4, 5];
  let results = sumOfSquares(myArrayys);
  console.log(`The sum of squares is: ${results}`);  
  