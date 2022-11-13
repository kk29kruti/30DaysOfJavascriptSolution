//Object.assign: method is used to copy an object without modifying the orignal object

//Object.keys : method is used to get the keys or properties of an object as an array
//example:- keys [ 'a', 'b', 'c' ]
//Object.values : method is used to get the values of an object as an array
//example:- values [ 1, 4, 5 ]
//Object.entries : method is used to get the value and key of an object in an array
//example:-entries [ [ 'a', 1 ], [ 'b', 4 ], [ 'c', 5 ] ]

//hasOwnProperty method is used to check if a property is exists in an object

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log("Target", target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log("copy returnedTarget", returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const keys = Object.keys(returnedTarget);
console.log("keys", keys);

const values = Object.values(returnedTarget);
console.log("values", values);

const entries = Object.entries(returnedTarget);
console.log("entries", entries);

const check_property = returnedTarget.hasOwnProperty("d");
console.log("check_property", check_property);
