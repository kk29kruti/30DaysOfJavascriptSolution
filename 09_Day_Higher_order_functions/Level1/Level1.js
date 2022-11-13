const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1.Explain the difference between forEach, map, filter, and reduce.

////difference between map and forEach method:-
//1) return value:- map return new array and forEach return undefined
//2) chainable :- map perform kariya pachi eni sathe reduce(),sort(),filter() so on perform kari sako but forEach method ma not possible bcz eni return value undefined 6

//2.Define a callback function before you use it in forEach, map, filter or reduce.

// const callbackFun = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * 3;
// }
// console.log(cube(callbackFun, 3));

//3.Use forEach to console.log each country in the countries array.

// const countries_arr = countries.forEach((country) => {
//   console.log(country);
// });

//4.Use forEach to console.log each name in the names array.

// const names_arr = names.forEach((name) => {
//   console.log(name);
// });

//5.Use forEach to console.log each number in the numbers array.

// const numbers_arr = numbers.forEach((number) => {
//   console.log(number);
// });

//6.Use map to create a new array by changing each country to uppercase in the countries array.
// const countries1 = [];
// const countries_map = countries.map((country) =>
//   countries1.push(country.toUpperCase())
// );
// console.log("countries array to uppercase",countries1);

//7.Use map to create an array of countries length from countries array.

// const countries_leng = [];
// const countries_leng_ = [];
// const countries_leng_map = countries.map((country) => {
//   countries_leng_.push(country.length);
// });
// console.log("every countries length", countries_leng_);

//8.Use map to create a new array by changing each number to square in the numbers array
// const number_sqaure = [];

// const numbers_arr = numbers.map((number) => {
//   number_sqaure.push(number ** 2);
// });
// console.log("number of square ",number_sqaure)

//9.Use map to change to each name to uppercase in the names array
// const map_arr = [];
// const name_uppercase = names.map((name) => {
//   map_arr.push(name.toUpperCase());
//   // console.log(name.toUpperCase());
// });

// console.log(map_arr);

//10.Use map to map the products array to its corresponding prices.
// products.map((product) => {
//   console.log(product);
// });

//11.Use filter to filter out countries containing land.

// const countriesContainingLand = countries.filter((country) =>
//   country.includes("land")
// );
// console.log(countriesContainingLand);

//12.Use filter to filter out countries having six character.

// const countriesContainSixChar = countries.filter(
//   (country) => country.length === 6
// );
// console.log(countriesContainSixChar);

//13.Use filter to filter out countries containing six letters and more in the country array.

// const More_countriesContainSixChar = countries.filter(
//   (country) => country.length >= 6
// );
// console.log(More_countriesContainSixChar);

//14.Use filter to filter out country start with 'E';

// const Start_countries = countries.filter((country) => country.startsWith("E"));
// console.log(Start_countries);

//15.Use filter to filter out only prices with values.

// const products_price = products.filter((product) => {
//   if (typeof product.price == "number") {
//     return product;
//   }
// });
// console.log("products_price", products_price);

// const products_price = products.filter((product) => {
//   if (product.price > 0) {
//     return product;
//   }
// });
// console.log("products_price", products_price);

//16.Declare a function called getStringLists which takes an array as a parameter and then returns
//an array only with string items.
// const array = ["kk", 1, "aa", 2, "bb", 3, "cc", 4];
// function getStringLists(array) {
//   return array.filter((str) => typeof(str) == "string")
// }
// console.log(getStringLists(array));

//17.Use reduce to sum all the numbers in the numbers array.
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce method ma thisValue na apiye toh accumulator e by default array ni first value lai lese

// const sum_number = numbers.reduce((acc, currVal) => {
//   return acc + currVal;
// });
// console.log(sum_number);

//18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland,
//Sweden, Denmark, Norway, and IceLand are north European countries
// let str1 = " are north European countries";
// let str2 = "Estonia, ";
// const countries_arr = countries.reduce((acc, currVal) => {
//   let str = "";
//   str = acc + ", " + currVal;
//   return str;
// });
// console.log(str2 + countries_arr + str1);

//19.Explain the difference between some and every

//diffrence between some and every :-
// some method ma koi ek element pn condition satisfies karti hase toh return postive ma malse (boolean)
// every method ma badha j element condition prove karva joiye jo yes then return postive ma malse (boolean)

//20.Use some to check if some names' length greater than seven in names array
// const some_name = names.some((name) => name.length > 7);
// console.log(some_name);

//21.Use every to check if all the countries contain the word land
// const every_countries = countries.every((country) =>
//   country.toLowerCase().includes("land")
// );
// console.log(every_countries);

//22.Explain the difference between find and findIndex.

//find method first element je condition satisfied karti hase e element return karse
//findIndex method first element je condition satisfied karti hase eni position return

//23.Use find to find the first country containing only six letters in the countries array

// const find_country = countries.find((country) => country.length == 6);
// console.log(find_country);

//24.Use findIndex to find the position of the first country containing only six letters in
//the countries array
// const findIndex_country = countries.findIndex((country) => country.length == 6);
// console.log(findIndex_country);

//25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// const findIndex_NorWay = countries.findIndex((country) =>
//   country.includes("Norway")
// );
// console.log(findIndex_NorWay);

//26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// const findIndex_Russia = countries.findIndex((country) =>
//   country.includes("Russia")
// );
// console.log(findIndex_Russia);
