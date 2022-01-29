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

const firstName = 'kyu';
const job = 'programmer';
const birthYear = 1997;
const year = 2037;

const kyu = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kyu);

const kyuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kyuNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let contury;
const birthYear = 1991; 
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Kyu'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kyu'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if (age === 18) console.log('You just became an adult');

if (age == 18) console.log('You just became an adult (loose)');

const favorite = prompt("What is your favourite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
} else if (favorite == 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7')
}

if (favorite !== 23) {
    console.log('Why not 23?');
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sara is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // c
console.log(hasDriversLicense || hasGoodVision || isTired) ;

const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday': 
        console.log('Recode videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}