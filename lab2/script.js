// ===== VARIABLES =====

// var (old way)
var name = "Ram";
console.log("var name:", name);

// let (can change)
let age = 20;
age = 21;
console.log("let age:", age);

// const (fixed value)
const country = "Nepal";
console.log("const country:", country);


// ===== FUNCTION =====

// normal function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Sita"));


// ===== ARROW FUNCTION =====

const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));


// ===== OBJECT =====

const student = {
    name: "Hari",
    age: 22,
    course: "BCA"
};

console.log("Student:", student);
console.log("Student Name:", student.name);


// ===== ARRAY =====

const numbers = [1, 2, 3, 4, 5];


// ===== MAP =====
// change each element

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled:", doubled);


// ===== FILTER =====
// select some elements

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// ===== SPREAD OPERATOR =====

// copy array
const copyArray = [...numbers];
console.log("Copied Array:", copyArray);

// add new values
const newArray = [...numbers, 6, 7];
console.log("New Array:", newArray);

// object spread
const newStudent = {
    ...student,
    grade: "A"
};

console.log("New Student:", newStudent);