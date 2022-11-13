// 1.Find the total price of products by chaining two or
// more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// const chaining = products
//   .filter((product) => {
//     if (typeof product.price == "number") {
//       return product;
//     }
//   })
//   .map((product) => product.price)
//   .reduce((acc, product) => acc + product);

// console.log("sum of products using chaining method", chaining);

//2.Find the sum of price of products using only reduce reduce(callback))

// let result = products.reduce((acc, obj) => {
//   return typeof obj.price == "number" ? acc + obj.price : acc;
// }, 0);
// console.log(result);

// 3.Declare a function called categorizeCountries which returns an array of countries
// which have some common pattern(you find the countries array in this repository as
// countries.js(eg 'land', 'ia', 'island','stan')).

// const countries = [
//   "Finland",
//   "Sweden",
//   "Denmark",
//   "Norway",
//   "Iceland",
//   "Ethiopia",
// ];

// function categorizeCountries(keyword) {
//   if (keyword == "land") {
//     console.log(countries.filter((country) => country.endsWith("land")));
//   } else if (keyword == "en") {
//     console.log(countries.filter((country) => country.endsWith("ia")));
//   } else if (keyword == "ia") {
//     console.log(countries.filter((country) => country.endsWith("en")));
//   } else {
//     console.log("Country does not Exists");
//   }
// }
// categorizeCountries("land");
// categorizeCountries("en");
// categorizeCountries("ia");

// 4.Create a function which return an array of objects, which is the letter and the number of
// times the letter use to start with a name of a country.

// const countries = [
//   "Finland",
//   "Sweden",
//   "Denmark",
//   "Norway",
//   "Iceland",
//   "Ethiopia",
//   "India",
// ];

// const getStartingLetters = (arr) => {
//   const occurences = arr.reduce((key, val) => {
//     const startingLetter = val[0];
//     key[startingLetter] = (key[startingLetter] || 0) + 1;
//     return key;
//   }, {});

//   return Object.keys(occurences)
//     .sort() //aa letter == key //count: occurences[letter] means value
//     .map((letter) => ({ letterplus: letter, count: occurences[letter] }));
// };

// console.log(
//   "sixth line => getStartingLetters(countries)",
//   getStartingLetters(countries)
// );

// 5.Declare a getFirstTenCountries function and return an array of ten countries.
// Use different functional programming to work on the countries.js array
// const countries = [
//   "Finland",
//   "Sweden",
//   "Denmark",
//   "Norway",
//   "Iceland",
//   "Ethiopia",
//   "Finland11",
//   "Sweden22",
//   "Denmark33",
//   "Norway44",
//   "Iceland55",
//   "Ethiopia66",
//   "Finland111",
//   "Sweden222",
//   "Denmark333",
//   "Norway444",
//   "Iceland555",
//   "Ethiopia666",
//   "Finland1111",
//   "Sweden2222",
//   "Denmark3333",
//   "Norway4444",
//   "Iceland5555",
//   "Ethiopia6666",
// ];
// function getFirstTenCountries(countries) {
//   const cc = countries.map((country) => country);
//   return cc.slice(0, 10);
// }

// getFirstTenCountries(countries);

//6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// function getLastTenCountries(countries) {
//   const cc = countries.map((country) => country);
//   return cc.slice(countries.length - 10);
// }

// console.log(getLastTenCountries(countries));

// 7.Find out which letter is used many times as initial for a country name from
// the countries array (eg. Finland, Fiji, France etc)

const words = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "Ethiopia",
  "India",
];

let CapitalWords = [];

function collectFirstLetter() {
  words.map((element) => CapitalWords.push(element[0]));
  let character = CapitalWords;
  return character;
}
let flatter = collectFirstLetter();
let fltr = flatter.join("");
console.log(fltr);

function solve(str) {
  const map = {};
  str.forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });

  let max = 1;
  let char = flatter[0];
  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}

const result = solve(flatter);
console.log(result);

let temp = [];

for (e of words) {
  if (e[0].toString().charAt(0) == result) {
    temp.push(e);
  }
}
console.log(temp);
