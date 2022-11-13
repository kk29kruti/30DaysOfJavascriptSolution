//1)Copy countries array(Avoid mutation)
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
//using spread method:-
const copy_countries = [...countries];
console.log(copy_countries);

// //using for loop:- (old method)
// let copy_for_arrr = [];
// for (let i = 0; i < countries.length; i++) {
//   copy_for_arrr[i] = countries[i];
// }
// console.log("copy_for_arrr", copy_for_arrr);

//2)Arrays are mutable. Create a copy of array which
//does not modify the original. Sort the copied array and store in a variable sortedCountries

const sortedCountries = copy_countries.sort();
console.log("sortedCountries", sortedCountries);

//3)Sort the webTechs array and mernStack array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// const sort_webTechs = webTechs.sort();
// const sort_mernStack = mernStack.sort();

// console.log("sort_webTechs", sort_webTechs);
// console.log("sort_mernStack", sort_mernStack);

//4)Extract all the countries contain the word 'land' from the countries array and print it as array
// let land_countries = [];
// for (let i = 0; i < copy_countries.length; i++) {
//   if (copy_countries[i].includes("land")) {
//     land_countries.push(copy_countries[i]);
//   }
// }
// console.log("land_countries", land_countries);

//5)Find the country containing the hightest number of characters in the countries array
// let max_copy = copy_countries[0];
// let max_arr = [];
// for (let i = 1; i < copy_countries.length; i++) {
//   if (copy_countries[i].length > max_copy.length) {
//     max_copy = copy_countries[i];
//     max_arr.push(max_copy);
//   }
// }
// console.log("Maximum length of country name", max_arr);

//6)Extract all the countries containing only four characters from the countries array and print it as array
// let four_arr = [];
// for (let i = 0; i < copy_countries.length; i++) {
//   if (copy_countries[i].length == 4) {
//     const cc = copy_countries[i];
//     four_arr.push(cc);
//   }
// }
// console.log("four_arr", four_arr);

//7)Extract all the countries containing two or more words from the countries array and print it as array

// let two_arr = [];
// for (let i = 0; i < copy_countries.length; i++) {
//   if (copy_countries[i].length >= 2) {
//     const cc = copy_countries[i];
//     two_arr.push(cc);
//   }
// }
// console.log("two_arr", two_arr);

//8)Reverse the countries array and capitalize each country and stored it as an array
// let sort_arr = [];
// let c1;
// for (let i = 0; i < sortedCountries.length; i++) {
//   c1 = sortedCountries[i].toUpperCase();
//   sort_arr.push(c1);
// }
// console.log("UpperCase plus sort arr", sort_arr);
