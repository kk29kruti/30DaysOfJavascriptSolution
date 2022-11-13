//1.Check the speed difference among the following loops: while, for, for of, forEach

// const countries = [
//   "Finland",
//   "Helsinki",
//   "Sweden",
//   "Stockholm",
//   "Norway",
//   "Oslo",
// ];

// console.time("While loop Timming");
// let i = 0;
// while (countries.length > i) {
//   i++;
// }
// console.log(countries);
// console.timeEnd("While loop Timming");

// console.time("for loop Timming");
// for (let i = 0; i < countries.length; i++) {}
// console.log(countries);
// console.timeEnd("for loop Timming");

// console.time("for of loop Timming");
// for (let cc of countries) {
//     console.log(cc);
// }

// console.timeEnd("for of loop Timming");

// console.time("for Each loop Timming");
// countries.forEach((cc) => {console.log(cc);});

// console.timeEnd("for Each loop Timming");

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
//row column
//00 01
//10 11
//20 21

console.time("Regular while loop");
let i = 0;
while (countries.length > i) {
  console.log(countries[i][0], countries[i][1]);
  i++;
}

console.timeEnd("Regular while loop");

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");
