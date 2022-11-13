//Higher Order Function :- other function as a parameter or return a function as a value
//callback function

const calc = (sum1, a, b) => {
  //sum is a callback function for the calc
  return sum1(a, b); //first aa call thase nd number of argument = number of parameter compulsory 6
};

const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};
console.log("callback function", calc(sum, 3, 4));
console.log("callback function", calc(diff, 3, 4));

//returning a function

const higherOrder = (n) => {
  const h1 = (m) => {
    const h2 = (t) => {
      return n * m * t;
    };
    return h2;
  };
  return h1;
};

console.log("higherOrder returning a function", higherOrder(2)(3)(4));

//forEach method:- callbackfunction(currentValue,index,array),thisvalue

const numbers = [1, 2, 3, 4, 5];
const sumarr = (arr) => {
  let sum = 0;
  const callback = (currentValue) => {
    sum += currentValue;
  };
  arr.forEach(callback);
  return sum;
};
console.log("sum of arrays", sumarr(numbers));

//simplified version of above example:-

const sumarrr1 = (arr) => {
  let sum = 0;
  arr.forEach((currentValue) => {
    sum += currentValue;
  });
  return sum;
};
console.log("simplified version of sum of arrays", sumarrr1(numbers));

//Setting Interval using a setInterval function

// function sayHello() {
//   console.log("Hello from setInterval");
// }
// setInterval(sayHello, 1000); //1second pachi print thay (repeatedly)

//Setting a time using a setTimeout

// function sayHello1() {
//   console.log("Hello from setTimeout");
// }
// setTimeout(sayHello1, 2000); //2second pachi print thay

// forEach, map, filter, reduce, find, every, some, and sort.

//forEach :- (We use forEach only with arrays.)

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) =>
  console.log("countries upperCase", element.toUpperCase())
);

//map:- callbackfunction(currentValue,index,array),thisvalue and return new array
const numbersSquare = numbers.map((num) => num * num);

console.log("numbersSquare", numbersSquare);

//filter method :-Filter out items which full fill filtering conditions and return a new array.
//callbackfunction(currentValue,index,array),thisvalue

const numberFilter = numbers.filter((num) => num > 2);
console.log("numberFilter", numberFilter);

//reduce: Reduce takes a callback function. The call back function takes accumulator,
//current, and optional initial value as a parameter and returns a single value.
//It is a good practice to define an initial value for the accumulator value.

//If our array is an empty array, then Javascript will throw an error.

//array.reduce(function(total, currentValue, currentIndex, array), initialValue) // initial value for the accumulator value
//If we do not specify this parameter, by default accumulator will get array first value.

const sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("reduce method sum1", sum1);

//every method :- array.every(function(currentValue, index, array), thisValue)
//It returns boolean

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllString = names.every((name) => typeof name === "string");

console.log("are All String", areAllString);

//find method :- return the first element which satisfies the given condition
const ages = [24, 22, 25, 18, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log("Starting first element age", ages.indexOf(age));
console.log("age", age);

//difference between map and forEach method:-
//1) return value:- map return new array and forEach return undefined
//2) chainable :- map perform kariya pachi eni sathe reduce(),sort(),filter() so on perform kari sako but forEach method ma not possible bcz eni return value undefined 6

//findIndex method:- return the position of the first element which satisfies the given condition
//array.findIndex(function(currentValue, index, arr), thisValue)

const result = names.findIndex((name) => name.length > 7);
console.log("result of findIndex method", result);

//some method :-

const names1 = ["Asabeneh", "Mathias", "Elias", "Brook", 1, 2, 3, 45];
const areAllStr = names1.some((name) => typeof name === "number");
console.log("not all are string ", areAllStr); // true

//diffrence between some and every :-
// some method ma koi ek element pn condition satisfies karti hase toh return postive ma malse (boolean)
// every method ma badha j element condition prove karva joiye jo yes then return postive ma malse (boolean)

//sort method:- array.sort(compareFunction)
//compareFunction	:-:-:- Optional.
//A function that defines a sort order.
//The function should return a negative, zero, or positive value, depending on the arguments:
//function(a, b){return a-b}
//When sort() compares two values, it sends the values to the compare function,
//and sorts the values according to the returned (negative, zero, positive) value.

//Example:-
// The sort function will sort 40 as a value lower than 100.

// When comparing 40 and 100, sort() calls the function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).
const numbers11 = [9.81, 3.14, 100, 37];
numbers11.sort(function (a, b) {
  //positive value ave toh swipe thay //return 1
  return a - b; //ascending
});
numbers11.sort(function (a, b) {
  //negative value ave toh swipe thay //return -1
  return b - a; //descending
});

//sorting object arrays
// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
