'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// code below will have reserved word error
// const interface = 'Audio';
// const private = 534;
// const if = 23;


function logger() {
    console.log('My name is Kyu');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1997, 'kyu'));
console.log(yearsUntilRetirement(1980, 'John'));



// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor2(2, 3));

const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return - 1;
    }
}
console.log(yearsUntilRetirement2(1997, 'Kyu'));
console.log(yearsUntilRetirement2(1991, 'John'));
console.log(yearsUntilRetirement2(1950, 'Pat'));



// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'kyu'
const kyu = [firstName, 'seok', 2022 - 1997, 'student', friends];
console.log(kyu);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);






const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength)

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();  // Last
const popped = friends.pop();
console.log(popped)
console.log(friends);

friends.shift();  // First
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));    // Strict type check

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}




// Objects
const kyuArray = [
    'kyu',
    'seok',
    2037 - 1991,
    'student', 
    ['Micahel', 'Peter', 'Steven']
]

const kyu = {
    firstName: 'kyu', 
    lastName: 'seok',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Micahel', 'Peter', 'Steven']
};
console.log(kyu);

console.log(kyu.lastName);
console.log(kyu['lastName']);

const nameKey = 'Name';
console.log(kyu['first' + nameKey]);
console.log(kyu['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Kyu? Choose between firstName, lastName, age, job and friends');

if (kyu[interestedIn]) {
    console.log(kyu[interestedIn]);
} else {
    console.log('Wrong request')
}

kyu.location = 'South Korea';
kyu['email'] = 'kyu@email.com';
console.log(kyu);




// Object methods
const kyu = {
    firstName: 'kyu', 
    lastName: 'seok',
    birthYear: 1997,
    job: 'student',
    friends: ['Micahel', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }

};

console.log(kyu.calcAge());
console.log(kyu.age);
console.log(kyu.age);
console.log(kyu.age);

console.log(kyu.getSummary())



// Iteration    
const kyuArrayIter = [
    'Kyu',
    'Seok',
    2037 - 1997,
    'student',
    ['Micahel', 'Peter', 'Steven']
];
const types = [];

for (let i = 0; i < kyuArrayIter.length; i++) {
    console.log(kyuArrayIter[i], typeof kyuArrayIter[i]);
    types.push(typeof kyuArrayIter[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < kyuArrayIter.length; i++) {
    if (typeof kyuArrayIter[i] !== 'string') continue; 

    console.log(kyuArrayIter[i], typeof kyuArrayIter[i]);
}

const kyuArrayIter = [
    'Kyu',
    'Seok',
    2037 - 1997,
    'student',
    ['Micahel', 'Peter', 'Steven']
];

for (let i = kyuArrayIter.length - 1; i >= 0; i--) {
    console.log(i, kyuArrayIter[i]);
}

for (let exercise = 1; exercise < 4; exercise++ ) {
    console.log(`----- Staring exercies ${exercise}-----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}


let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}