//3)Declare a function name printArray. It takes array as a parameter
//and it prints out each value of the array.

// function printArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// printArray(numbers);

// //4)Write a function name showDateTime which shows time in
// //this format: 08/01/2020 04:08 using the Date object.

// function showDateTime() {
//   const d = new Date();
//   let date = d.getDate();
//   let month = d.getMonth();
//   let year = d.getFullYear();
//   let minute = d.getMinutes();
//   let hours = d.getHours();

//   if (date < 10) {
//     date = "0" + date;
//   } else if (month < 10) {
//     month = "0" + month;
//   } else if (minute < 10) {
//     minute = "0" + minute;
//   } else if (hours < 10) {
//     hours = "0" + hours;
//   }

//   const date_time = `${date}/${month}/${year} ${hours}:${minute}`;
//   console.log(date_time);
// }
// showDateTime();

//5)Declare a function name swapValues. This function swaps value of x to y.
//first way (using temporary variable)
// function swapValues(x, y) {
//   let temp;
//   temp = x; //temp = 3
//   x = y; // x = 4
//   y = temp; //y = 3
//   console.log("swap value x=3 and y=4 ", `x = ${x} and y = ${y}`);
// }

// swapValues(3, 4);

//second way (without using third variable)
// function swapValues(x, y) {
//   x = x + y; //x = 3+4 =7
//   y = x - y; //y= 7-4 =3
//   x = x - y; // x = 7-3 =4
//   console.log("swap value x=3 and y=4 ", `x = ${x} and y = ${y}`);
// }
// swapValues(3, 4);

//6)Declare a function name reverseArray.
//It takes array as a parameter and it returns the reverse of the array (don't use method).

// let array = [1, 2, 3, 4, 5];
// let character = ["A", "B", "C", "D", "E", "F"];
// function reverseArray(arr) {
//   let sum = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     sum.push(arr[i]);
//   }
//   return sum;
// }
// console.log("Reverse Number", reverseArray(character));

//7)Declare a function name capitalizeArray. It takes array as a parameter
//and it returns the - capitalizedarray.
// const arr_char = ["abc", "def", "ghi"];
// function capitalizeArray(arr) {
//   let chracter = [];
//   for (let i = 0; i < arr.length; i++) {
//     chracter.push(arr[i].toUpperCase());
//   }
//   return chracter;
// }
// console.log("capitalized Array", capitalizeArray(arr_char));

//8)Declare a function name addItem. It takes an item parameter
//and it returns an array after adding the item
// let add_item = [];
// function addItem(item) {
//   add_item.push(item);
//   return add_item;
// }
// console.log("add item", addItem("item"));

// 9.Declare a function name removeItem. It takes an index parameter
// and it returns an array after removing an item

// let remove_item = ["kk", "patel", 1, 4, "orange", "green"];
// function removeItem(index) {
//   return remove_item.splice(index, 1);
// }
// console.log("remove item:-- ", removeItem(4));

//10)Declare a function name sumOfNumbers. It takes a number parameter
//and it adds all the numbers in that range.

// function sumOfNumbers(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log("sum of total 10 numbers", sumOfNumbers(10));
// console.log("sum of total 5 numbers", sumOfNumbers(5));

//11)Declare a function name sumOfOdds. It takes a number parameter
//and it adds all the odd numbers in that - range.

// function sumOfOdds(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 !== 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log("sum of odd 10 numbers", sumOfOdds(10));
// console.log("sum of odd 5 numbers", sumOfOdds(5));

//12)Declare a function name sumOfEven. It takes a number parameter
//and it adds all the even numbers in that - range.

// function sumOfEven(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log("sum of odd 10 numbers", sumOfEven(10));
// console.log("sum of odd 5 numbers", sumOfEven(5));

//13)Declare a function name evensAndOdds . It takes a positive integer as parameter
//and it counts number of evens and odds in the number.
//expected o/p:- evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// let count = 0;
// let count1 = 0;
// function evensAndOdds(number) {
//   let sum = [];
//   let sum1 = [];
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum.push(i);
//       count++;
//     } else if (i % 2 !== 0) {
//       sum1.push(i);
//       count1++;
//     }
//   }
//   console.log("The numbers of even are", count, sum);
//   console.log("The numbers of odd are", count1, sum1);
// }

// evensAndOdds(6);
// evensAndOdds(100);

//14)Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// function Sum_of_Any_Argument() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log("Sum_of_Any_Argument", Sum_of_Any_Argument(1, 2, 3, 4));
// console.log("Sum_of_Any_Argument", Sum_of_Any_Argument(1, 2, 3, 4, 5, 6, 7, 8));

//second method (arrow function)

// const sumsum = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sumsum(1, 2, 3, 4, 5));

//15)Write a function which generates a randomUserIp. (range 0 to 255)

// function randomUserIp() {
//   let ip =
//     Math.floor(Math.random() * 256) +
//     "." +
//     Math.floor(Math.random() * 256) +
//     "." +
//     Math.floor(Math.random() * 256) +
//     "." +
//     Math.floor(Math.random() * 256);
//   return ip;
// }
// console.log("randomUserIp", randomUserIp());

//16)Write a function which generates a randomMacAddress

//17)Declare a function name randomHexaNumberGenerator. When this function is called it generates
//a random hexadecimal number. The function return the hexadecimal number.
//expected o/p:-console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator() {
  let chrachters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  let op = "";
  for (let i = 0; i < 6; i++) {
    result += chrachters.charAt(Math.floor(Math.random() * chrachters.length));
    op = "#" + result;
  }
  return op;
}
console.log(randomHexaNumberGenerator());

//18)Declare a function name userIdGenerator. When this function is
//called it generates seven character id. The function return the id.
//expected o/p:-console.log(userIdGenerator());
// 41XTDbE

function userIdGenerator() {
  let chrachters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += chrachters.charAt(Math.floor(Math.random() * chrachters.length));
  }
  return result;
}

console.log("any number of random id", userIdGenerator());
