// use a notebook and give examples
//1 push
//2 pop
//3 length
//4 tostring
//5 splice
//6 slice
//7 sort
//8 shift
//9 unshift
//10 contact
//11 reverse


// 1 push 

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// 2.pop 
let fruits1 = ["apple", "banana", "mango"];
let removedItem = fruits1.pop();

console.log(fruits1);       // Output: ["apple", "banana"]
console.log(removedItem);  // Output: "mango"

// 3 length 
let fruits = ["apple", "banana", "mango"];
console.log(fruits.length); // Output: 3

let message = "Hello, world!";
console.log(message.length); // Output: 13

// 4 tostring 
let num = 123;
let str = num.toString();

console.log(str);          // Output: "123"
console.log(typeof str);   // Output: "string"

// 5 splice 
let fruits2 = ["apple", "banana", "mango", "orange"];
let removedItems = fruits2.splice(1, 2);

console.log(fruits2);       // Output: ["apple", "orange"]
console.log(removedItems); // Output: ["banana", "mango"]

// 6.slice
let numbers1 = [10, 20, 30, 40, 50];
let slicedNumbers = numbers1.slice(2);

console.log(slicedNumbers); // Output: [30, 40, 50]

// 7.sort
let numbers2 = [40, 100, 1, 5, 25, 10];

// Ascending order
numbers2.sort((a, b) => a - b);
console.log(numbers2); // Output: [1, 5, 10, 25, 40, 100]

// // Descending order
numbers.sort((a, b) => b - a);
console.log(numbers2); // Output: [100, 40, 25, 10, 5, 1]

// 8.shift
let fruits3 = ["apple", "banana", "mango"];
let firstFruit = fruits3.shift();

console.log(firstFruit); // Output: "apple"
console.log(fruits3);     // Output: ["banana", "mango"]

// 9.unshift

let numbers3 = [3, 4, 5];
numbers3.unshift(1, 2);

console.log(numbers3); // Output: [1, 2, 3, 4, 5]

// 10.concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr1);     // Output: [1, 2, 3] (Original array remains unchanged)

// 11.reverse
let numbers4 = [1, 2, 3, 4, 5];
let reversedNumbers = numbers4.reverse();

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

