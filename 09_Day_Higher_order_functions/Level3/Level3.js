// 1.Use the countries information, in the data folder. Sort countries by
// name, by capital, by population

// const countries_information = [
//   { name: "Afghanistan", capital: "AF", population: 1377422166 },
//   { name: "BandIslands", capital: "AX", population: 1295210000 },
//   { name: "Clbania", capital: "AL", population: 323947000 },
//   { name: "Dlgeria", capital: "DZ", population: 258705000 },
//   { name: "FmericanSamoa", capital: "AS", population: 206135893 },
//   { name: "EndorrA", capital: "AD", population: 194125062 },
//   { name: "Pngola", capital: "AO", population: 186988000 },
//   { name: "Onguilla", capital: "AI", population: 161006790 },
//   { name: "Nntarctica", capital: "AQ", population: 146599183 },
//   { name: "MntiguaandBarbuda", capital: "AG", population: 126960000 },
//   { name: "Lrgentina", capital: "AR", population: 186960000 },
//   { name: "Hrmenia", capital: "AM", population: 286960000 },
//   { name: "Iruba", capital: "AW", population: 686960000 },
//   { name: "Kustralia", capital: "AU", population: 456960000 },
// ];
// //compares two strings in the current locale.
// const sort_countries = countries_information.sort(
//   (a, b) =>
//     a.capital.localeCompare(b.capital) &&
//     a.name.localeCompare(b.name) &&
//     a.population - b.population
// );
// console.log("sort_countries by name, captial, population", sort_countries);

//2.*** Find the 10 most spoken languages:

// const country = [
//   { country: "Gujarati", count: 991 },
//   { country: "Hindi", count: 281 },
//   { country: "Marathi", count: 81 },
//   { country: "Russian", count: 1 },
//   { country: "English", count: 91 },
//   { country: "French", count: 45 },
//   { country: "Arabic", count: 25 },
//   { country: "Spanish", count: 24 },
//   { country: "Russian2", count: 99 },
//   { country: "Portuguese", count: 9 },
//   { country: "Dutch", count: 8 },
//   { country: "German", count: 7 },
//   { country: "Chinese", count: 5 },
//   { country: "Swahili", count: 4 },
// ];

// function MyMin(myarr) {
//   var al = myarr.length - 1;
//   minimum = myarr[al];
//   while (al--) {
//     if (myarr[al] < minimum) {
//       minimum = myarr[al];
//     }
//   }
//   return minimum;
// }

// let m = MyMin(country);
// console.log("minumum value of array of object", m);
// let mmm = m.count;
// console.log("minimum value of count", mmm);

// let country_push = [];
// let again = [];

// function countFind(country) {
//   for (let i = 0; i < country.length; i++) {
//     // console.log("country.length", country.length);
//     // console.log("country[i].count", country[i].count);
//     // console.log("mmm", mmm);

//     if (country[i].count > mmm) {
//       country_push.push(country[i].count);
//       //   console.log("country_push", country_push);
//     }
//   }

//   country_push.sort((a, b) => a.count - b.count).slice(0, 10);
//   //   console.log("country_push", country_push);

//   for (let i = 0; i < country.length; i++) {
//     country.sort((a, b) => b.count - a.count);
//     if (country[i].count === country_push[i]) {
//       return country.slice(0, 10);
//     }
//   }
// }

// console.log("10 most spoken languages", countFind(country));

//3.*** Use countries_data.js file create a function which create the ten most populated countries

// const countries_data = [
//   { country: "China", population: 1377422166 },
//   { country: "India", population: 1295210000 },
//   { country: "United States of America", population: 323947000 },
//   { country: "Indonesia", population: 258705000 },
//   { country: "Brazil", population: 206135893 },
//   { country: "Pakistan", population: 194125062 },
//   { country: "Nigeria", population: 186988000 },
//   { country: "Bangladesh", population: 161006790 },
//   { country: "Russian Federation", population: 146599183 },
//   { country: "Nagaland", population: 1269608999 },
//   { country: "Japan", population: 126960000 },
// ];
// function MyMin(myarr) {
//   var al = myarr.length - 1;
//   minimum = myarr[al];
//   while (al--) {
//     if (myarr[al] < minimum) {
//       minimum = myarr[al];
//     }
//   }
//   return minimum;
// }

// var m = MyMin(countries_data);
// console.log("minumum value of array of object", m);
// let mmm = m.population;
// console.log("minimum value of count", mmm);

// let country_push = [];
// let again = [];

// function mostPopulatedCountries(country) {
//   for (let i = 0; i < country.length; i++) {
//     // console.log("country.length", country.length);
//     // console.log("country[i].count", country[i].count);
//     // console.log("mmm", mmm);

//     if (country[i].population > mmm) {
//       country_push.push(country[i].population);
//       //   console.log("country_push", country_push);
//     }
//   }

//   country_push.sort((a, b) => a.population - b.population).slice(0, 10);
//   //   console.log("country_push", country_push);

//   for (let i = 0; i < country.length; i++) {
//     country.sort((a, b) => b.population - a.population);
//     if (country[i].population === country_push[i]) {
//       return country.slice(0, 10);
//     }
//   }
// }

// console.log("most populated countries", mostPopulatedCountries(countries_data));
