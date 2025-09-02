//  Palindrome number
function isPalindrome(num) {
  let str = num.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(123321));
console.log(isPalindrome(12345));

// Reversed String
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

//  Reversed Array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// FunBuzz Program
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

//  Prime NUmber
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// Count the Occurrence of Each number in a Array
// Problem: Write a program to count how many times each character appears in a Array.
function countChars(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(countChars("hello"));

// 7 : - fibonacci series
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(7));

// 8 : - Find First Non-Repeated Character in a String
// Problem: Given a string, find the first character that is not repeated.
function firstNonRepeatedChar(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatedChar("swiss"));

// Find Max and Min Number Using
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}

let arr = [4, 3, -7, 6, -2];
let result = findMaxMin(arr);
console.log("Max:", result.max);
console.log("Min:", result.min);

let one = "hello welcome to javascript";
let two = "";
for (let i = 0; i < one.length; i++) {
  if (i === 0 || one[i - 1] === " ") {
    two += one[i].toUpperCase();
  } else {
    two += one[i];
  }
}
console.log(two);

