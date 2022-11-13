//JavaScript is a loosely-typed language.
//Some times you will get a runtime error when you try to access an undefined variable
//or call undefined function etc.

//try-catch-finally block.

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

//try block :- block of code test karva mate jo ema error exist karti hase toh e
//catch block ma re-direct thai jase nd baki no code ne execute nahi thva dese
//catch block :- error message display karva mate use thay 6
//finally block:-e last ma execute toh thay J

//catch block ma je parameter pass thay eni pase name and message nam ni property hoy nd e commnly
//parameter as a err, e , error e type nu pass thay nd e badha object hoy
//name means error nu nam
//message means error no message

//throw statement:- used to create custom error

const throwErrorExampleFun = () => {
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

//Error types :-
//1)Refrence Error :- variable used ma leta hoy but ene declare na kariyu hoy tyare

// let firstName = "Asabeneh";
// let fullName = firstName + " " + lastName;

// console.log(fullName);

// Uncaught ReferenceError: lastName is not defined
//     at <anonymous>:2:35

//2)syntax error :- expected syntax na lakhi hoy tyare

// let square = 2 x 2
// console.log(square)

// console.log('Hello, world")

// Uncaught SyntaxError: Unexpected identifier 'X'

//3)Type Error:-TypeError occurs when an operation is performed on a wrong data type.
//Maybe a boolean is expected but a sting is found.

// let num = 10
// console.log(num.toLowerCase())

// Uncaught TypeError: num.toLowerCase is not a function
//     at <anonymous>:2:17
