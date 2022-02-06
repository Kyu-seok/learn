"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov} €</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};


const calcDisplaySummary = function(acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} €`

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)} €`

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, interest)=> acc + interest, 0);
    labelSumInterest.textContent = `${interest} €`;
}

const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} €`
};

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(word => word[0]).join('');
    })
}
createUsernames(accounts);

const updateUI = function(acc) {
      // Display movements
      displayMovements(acc.movements);

      // Display balance
      calcDisplayBalance(acc)

      // Display summary
      calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
    // Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear the input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
})

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault()
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';
    
    if (amount > 0 && 
        receiverAcc && 
        currentAccount.balance >= amount && 
        receiverAcc?.username !== currentAccount.username) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // UpdateUI
        updateUI(currentAccount);
    }
})

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
})


btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username == currentAccount.username);
        console.log(index);
        
        accounts.splice(index, 1);

        // Hide UI 
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;

btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`mov ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`mov ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)


const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

// Map
currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
})


const eurToUsd = 1.1;

const movementsUSD = movements.map( mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
    )
console.log(movementsDescriptions);


const deposits = movements.filter(function(mov){
    return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);

const balance = movements.reduce( (acc, mov, i, arr) => acc + mov, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, cur) => {
    if (acc > cur) return acc;
    else return cur;
}, movements.at(0));

console.log(max);




const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcHumanAge = function(arr){
    return arr.map(element => {
        if (element <= 2) {
            return 2 * element;
        } else {
            return 16 + element * 4;
        }
    })
};

const excludeDog = function(arr) {
    return calcHumanAge(arr).filter(element => element > 18)
}

const calcAverage = function(arr) {
    return excludeDog(arr).reduce((acc, element) => acc + element, 0 ) / arr.length;
}

const ansTest1a = calcHumanAge(testData1);
const ansTest2a = excludeDog(testData1);
const ansTest3a = calcAverage(testData1);
console.log(ansTest1a);
console.log(ansTest2a);
console.log(ansTest3a);

const ansTest1b = calcHumanAge(testData2);
const ansTest2b = excludeDog(testData2);
const ansTest3b = calcAverage(testData2);
console.log(ansTest1b);
console.log(ansTest2b);
console.log(ansTest3b);


const eurToUsd = 1.1;
console.log(movements);

const totalDepositesUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        console.log(arr);
        return mov * eurToUsd;
    })
    // .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositesUSD);

const firstWithdrawal = movements.find(mov => mov < 0);;
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


console.log(movements);
// Checks only EQUALITY
console.log(movements.includes(-130));

// Checks CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Strings
const owners = ['Kyu', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers 
console.log(movements);

// return < 0 then A, B (keep order)
// return > 0 then B, A (switch order)
movements.sort((a, b) => a - b)
console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
x.map(() => 5);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5)
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'), 
        el => el.textContent.replace('€', '')
    );
    console.log(movementsUI);
})

// 1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2. 
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => cur >= 1000 ? ++count : count, 0);

console.log(numDeposits1000);

// 3.
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    // cur > 0 ? sums.deposit += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);

// 4.
// this is a nice title  -> This Is a Nice Title
const convertTitleCase = function(title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
    return capitalize(titleCase);
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

