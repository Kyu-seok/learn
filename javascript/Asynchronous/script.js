"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener("load", function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;
//     });
// };
 

 
/*
const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        
        // Render country 1
        renderCountry(data);

        // get neighbour country (2)
        const [neighbour] = data.borders;

        if (!neighbour) return;
        
        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
        
            renderCountry(data2, 'neighbour');
        })

    });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('korea');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

*/

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }

// const request = fetch('https://restcountries.com/v2/name/portugal');

const getJSON = function(url, errorMsg = `Something went wrong`) {
    fetch(url).then( response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    })
}

const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            console.log(response);

            if (!response.ok)
                throw new Error(`Country not found (${response.status})`)

            return response.json()
        })
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0]

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err}🚨🚨🚨`)
            renderError(`something went wrong 🚨🚨 ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}

// const getCountryData = function(country) {

//     getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found').then((data) => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0]

//         if (!neighbour) throw new Error('No neighbour found!');

//         // Country 2
//         return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found')
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.error(`${err}🚨🚨🚨`)
//         renderError(`something went wrong 🚨🚨 ${err.message}. Try again!`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// }

btn.addEventListener('click', function() {
    getCountryData('portugal')
});

// getCountryData('australia')

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 10000; i++) {
//         console.log(res);
//     }
// })
// console.log('Test end');

const lotteryPromise = new Promise(function(resolve, reject) {

    console.log('Lottery draw is happening 🔮');
    setTimeout(function() {
        if (Math.random() >= 0.5) {
            resolve('You WIN 💰');
        } else {
            reject(new Error('You lost your money 💩'));
        }
    }, 2000)

})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('Problem!').catch(x => console.error(x));