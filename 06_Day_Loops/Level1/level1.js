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

//1)Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop,
// for (let i = 0; i < countries.length; i++) {
//   console.log("For loop Contries", countries[i]);
// }

//while loop,
// let i = 0;
// while (i < countries.length) {
//   console.log("While loop Contries", countries[i]);
//   i++;
// }

//do while loop
// let i1 = 0;
// do {
//   console.log("Do While loop Contries", countries[i1]);
//   i1++;
// } while (i1 < countries.length);

//2)Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop,
// for (let i = 10; i >= 0; i--) {
//   console.log("Reverse For loop Contries", countries[i]);
// }

//while loop,
// let i2 = 10;
// while (i2 >= 0) {
//   console.log("Reverse While loop Contries", countries[i2]);
//   i2--;
// }

//do while loop
// let i3 = 10;
// do {
//   console.log("Reverse Do While loop Contries", countries[i3]);
//   i3--;
// } while (i3 >= 0);

//3)Iterate 0 to n using for loop

// let n = 8;
// for (let i = 0; i <= n; i++) {
//   console.log("For loop I need 8 countries name", countries[i]);
// }

//4)Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let string = "";
// for (let i = 0; i <= 6; i++) {
//   for (let j = 0; j <= i; j++) {
//     string += "#";
//   }
//   string = string + "\n";
// }
// console.log(`${string}`);

//5)Use loop to print the following pattern:
//o/p want:-
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

//6)Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// let i1 = 2;
// let i2 = 3;
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}  ${i ** i1} ${i ** i2} `);
// }

//7)Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log("even numbers", i);
//   }
// }

//8)Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log("odd numbers", i);
//   }
// }

//9)Use for loop to iterate from 0 to 100 and print only prime numbers
//number pote and only 1 vade j divisible hoy ene
//1 prime number nahi bcz ena ek j
// 2 ne 2 and 1 and 4 ne 1,2,4 ama 3vade divide thay 6 so 4 e prime number nahi

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// for (var i = 0; i < 100; i++) {
//   if (isPrime(i)) {
//     console.log("0 to 100 Prime numbers are: ", i);
//   }
// }

//10)Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log("The sum of all numbers from 0 to 100 is", sum);

//11)Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// let sum_odd = 0;
// let sum_even = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum_even = sum_even + i;
//   } else {
//     sum_odd = sum_odd + i;
//   }
// }
// console.log("Even 0 to 100 is", sum_even);
// console.log("Odd 0 to 100 is", sum_odd);

//12)Use for loop to iterate from 0 to 100 and print the sum of all evens and the
//sum of all odds. Print sum of evens and sum of odds as array //  [2550, 2500]
// let sum_odd1 = 0;
// let sum_even1 = 0;
// let newArrr = [];
// let newArrr1 = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum_even1 = sum_even1 + i;
//   } else {
//     sum_odd1 = sum_odd1 + i;
//   }
// }
// newArrr.push(sum_even1);
// newArrr1.push(sum_odd1);
// console.log("Even 0 to 100 is", newArrr);
// console.log("Odd 0 to 100 is", newArrr1);

//13)Develop a small script which generate array of 5 random numbers
// let arr = Math.random();
// const newArr = [];
// for (let i = arr; i <= 5; i++) {
//   newArr.push(i);
// }
// console.log("total 5 random numbers:", newArr);

//14)Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arr = Math.random();
// const newArr = [];
// for (let i = arr; i <= 5; i++) {
//   newArr.push(i);
// }
// console.log("total 5 random numbers and the numbers must be unique:", newArr);

//15)Develop a small script which generate a six characters random id: (GOOGLE)
function makeId() {
  var result = "";
  var chracters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++) {
    result += chracters.charAt(Math.floor(Math.random() * chracters.length));
  }
  return result;
}
console.log(makeId());
