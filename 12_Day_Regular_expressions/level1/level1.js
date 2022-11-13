// 1.Calculate the total annual income of the person from the following text.
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let txt =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let pattern = /\d+/g;
let matches = txt.match(pattern);
console.log("Digits in the form of array", matches);
let cc = matches.toString();
let cc1 = matches[0];
// console.log(cc1);
let cc2 = matches[1];
// console.log(cc2);
let cc3 = matches[2];
// console.log(cc3);

let cc4 = (Number(cc1) + Number(cc2) + Number(cc3)) * 12;
console.log("Annual income", cc4);

//2.Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

// let str = "first_name"; //true
// let str = "first-name"; //false
let str = "1first1_name"; //false
// let str = "firstname";

function is_valid_variable(str) {
  let result;
  let regex = /^([a-zA-Z_$][a-zA-Z0-9_$]*)$/;
  result = regex.test(str);
  console.log("variable is in the valid format", result);
}

is_valid_variable(str);
