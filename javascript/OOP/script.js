'use strict';

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method in construction function
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };

};

const kyu = new Person('Kyu', 1997);
console.log(kyu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(kyu instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

kyu.calcAge();
matilda.calcAge();

console.log(kyu.__proto__);
console.log(kyu.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(kyu));

Person.prototype.species = 'Homo Sapiens';
console.log(kyu.species, matilda.species);

console.log(kyu.hasOwnProperty('species'));

console.log(kyu.__proto__);
// Object.prototype (top of prototype chain)
console.log(kyu.__proto__.__proto__);
console.log(kyu.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array == []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

