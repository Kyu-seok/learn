'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price, 
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const kyu = {
    name: 'Kyu Seok',
    passport: 21234215,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 21234215) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
}

checkIn(flight, kyu);
console.log(flight);
console.log(kyu);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(kyu);
checkIn(flight, kyu);


const oneWord = function(str) {
    return str.replaceAll(' ', '');
}

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Kyu', 'Martha', 'Adam'].forEach(high5);


const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Kyu');
greeterHey('Steven');

greet('Hello')('Kyu');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Kyu');


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Yeum Kyu Seok');
lufthansa.book(653, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}
book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kyu Seok Yeum');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));



const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python',  '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
        console.log(answer);
        // Register answer
        answer < this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6]});

const runOnce = function() {
    console.log('This will never run again');
};

runOnce();

// IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

(() => console.log('This will never run again'))();

{
    const isPrivate = 23
    var notPrivate = 47;
}

// console.log(isPrivate);
console.log(notPrivate);


const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);


(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue'
    })
})();
