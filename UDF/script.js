function square(num) {
    return num * num;
}

let result = square(5);
console.log("Square of 5 is:", result); 

function functionName(parameters) {
    return value;
}

function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); 

function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4)); 

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(toTitleCase("hello world"));
