//1)Develop a small script which generate any number of characters random id:
///any number of chracters means length fix nahi

// function makeRandomId(num) {
//   let chracters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += chracters.charAt(Math.floor(Math.random() * chracters.length));
//   }
//   return result;
// }

// console.log("any number of random id ", makeRandomId(5));
// console.log("any number of random id", makeRandomId(15));

//2)Write a script which generates a random hexadecimal number.
// base 16.

// function hexaId(num) {
//   let hexa = "0123456789ABCDEF";
//   let op = "";
//   for (let i = 0; i < num; i++) {
//     op += hexa.charAt(Math.floor(Math.random() * hexa.length));
//     op1 = "#" + op;
//   }
//   return op1;
// }

// console.log("hexa id", hexaId(12));
// console.log("hexa id", hexaId(2));

//3.Write a script which generates a random rgb color number. (google)

// let rgbColors = [];

// for (let i = 0; i < 3; i++) {
//   let randomNum = Math.floor(Math.random() * 256);
//   if (!rgbColors.includes(randomNum)) {
//     // rgb = (randomNum + ',' + randomNum + ',' + randomNum)
//     rgbColors.push(randomNum);
//   }
// }
// const [color1, color2, color3] = rgbColors;
// let rgb = `rgb(${color1},${color2},${color3})`;
// console.log(rgb);

//4.Using the above countries array, create the following new array.

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

////expected o/p:-["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let nrr = [];
// for (let i = 0; i < countries.length; i++) {
//   const toUppercase_Countries = countries[i].toUpperCase();
//   nrr.push(toUppercase_Countries);
// }
// console.log(nrr);

//5)Using the above countries array, create an array for countries length'.

////expected o/p:-[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// let nrr = [];
// for (let i = 0; i < countries.length; i++) {
//   const toUppercase_Countries = countries[i].toUpperCase();
//   nrr.push(toUppercase_Countries.length);
// }
// console.log(nrr);

//6)Use the countries array to create the following array of arrays:

////expected o/p:- [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

// let nrr = [];
// const splittedArray = [];

// for (let i = 0; i < countries.length; i++) {
//   const toUppercase_Countries = countries[i].toUpperCase();
//   const too1 = toUppercase_Countries.slice(0, 3);
//   const too = toUppercase_Countries.length;
//   nrr.push(countries[i], too1, too);
//   //second method without using splice method
//   // nrr.push([countries[i], too1, too]);
// }
// console.log(nrr);
// // console.log(nrr.length);
// while (nrr.length > 0) {
//   //splice means start poistion, ketala number delete karvnu 6 (second argument 1 to n start thase)and last argument item add karvi hoy ena mate
//   splittedArray.push(nrr.splice(0, 3));
// }
// console.log(splittedArray);

//7)In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array.
//If there is no country containing the word 'land', print 'All these countries are without land'.

//expected o/p:- ['Finland','Ireland', 'Iceland']
// const land = [];
// const land1 = [];
// for (let k = 0; k < countries.length; k++) {
//   if (countries[k].includes("land")) {
//     land.push(countries[k]);
//   } else {
//     land1.push(countries[k]);
//   }
// }
// console.log("Country are not contain land", land1);
// console.log(land);

//8)In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array.
//If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// const sub = [];
// const sub1 = [];
// for (let c = 0; c < countries.length; c++) {
//   if (countries[c].includes("ia")) {
//     sub.push(countries[c]);
//   } else {
//     sub1.push(countries[c]);
//   }
// }
// console.log("country are not contain ia", sub1);
// console.log(sub);

//9)Using the above countries array, find the country containing the biggest number of characters.
// const countriess = ["Albania", "Bolivia", "Ethiopia"];
// let max = countriess[0];
// for (let i = 1; i < countriess.length; i++) {
//   if (countriess[i].length > max.length) {
//     max = countriess[i];
//   }
// }
// console.log(max);

//10)Using the above countries array, find the country containing only 5 characters.
//expected o/p:- ['Japan', 'Kenya']

// let arr = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length == 5) {
//     arr.push(countries[i]);
//   }
// }
// console.log(arr);

//11)Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// let max = webTechs[0];
// console.log(max.length);
// for (let i = 1; i < webTechs.length; i++) {
//   if (webTechs[i].length > max.length) {
//     max = webTechs[i];
//   }
// }
// console.log(max);

//12)Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// let mm = [];
// let m1 = [];

// for (let i = 0; i < webTechs.length; i++) {
//   const toUppercase_webTechs = webTechs[i].toUpperCase();
//   const toUppercase_webTechs_leng = toUppercase_webTechs.length;
//   mm.push([toUppercase_webTechs, toUppercase_webTechs_leng]);
//   // mm.push(toUppercase_webTechs, toUppercase_webTechs_leng);
// }
// console.log(mm);
//second method
// while (mm.length > 0) {
//   m1.push(mm.splice(0, 2));
// }
// console.log(m1);

//13)An application created using MongoDB, Express,
//React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// const mernStack = ["MongoDB", "Express", "React", "Node"];
// let word = "";
// for (let i = 0; i < mernStack.length; i++) {
//   const elem = mernStack[i].slice(0, 1);
//   word += elem;
// }

// console.log(word);

//14)Iterate through the array, ["HTML", "CSS", "JS",
//"React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const new_arr = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

// for (let i = 0; i < new_arr.length; i++) {
//   console.log(new_arr[i]);
// }

//15)This is a fruit array , ['banana', 'orange', 'mango', 'lemon']
//reverse the order using loop without using a reverse method.

// const fruits = ["banana", "orange", "mango", "lemon"];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log("Fruits Reverse", fruits[i]);
// }

//16)Print all the elements of array as shown below.
//expected o/p:-
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  const ele = fullStack[i];
  ele.forEach((element) => {
    console.log(element);
  });
}

//extra
// Out: [1, 2, 3, 4, 5, 6, 7];
// In: [1, 2, [3, 4, [5, 6, 7]]];
// const arr = [1, 2, [3, 4, [5, 6, 7]]];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     for (let k = 0; k <= j; k++) {}
//   }
// }
