let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("kyu");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable naming convention
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);

// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// variable ${javascriptIsFun} is predeclared, therefore let is not used.
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined datatype
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

// type NULL
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, 2 * 2 * 2

const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;            // x = x - 1 = 100
console.log(x);

console.log(ageJonas > ageSarah);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);
