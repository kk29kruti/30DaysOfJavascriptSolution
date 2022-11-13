//1) Declare firstName, lastName, country, city, age, isMarried, year variable and 
//assign value to it and use the typeof operator to 
//check different data types.

const firstName = "Patel",lastName = "Kruti",country="India",city="Surat",age=22,
isMarried = 'No',year=2022;

console.log(typeof(firstName,lastName,country,city,isMarried));
console.log(typeof(age,year));

//2)Check if type of '10' is equal to 10

const Num = '10';
const Num1 = 10;

console.log(typeof(Num));
console.log(typeof(Num1));
console.log((Num==Num1));
console.log((Num===Num1));

//3)Check if parseInt('9.8') is equal to 10
const Num2 = parseInt('9.8');
const Num3 = parseInt(9.8) //bcz parseInt e integer ma convert kare so integer ma point pachi na number calculate na thay
console.log(Num2);
console.log(typeof(Num2));
console.log(Num2==Num1);


//4)Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.

const a = 1;
const b = 'one';
const c = true;

const a1 = 0;
const b1 ="";
const c1 = false;

console.log(a,b,c,a1,b1,c1);

//5)Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//i) 4 > 3 = true
// ii) 4 >= 3 = true
// iii) 4 < 3 = false
// iv) 4 <= 3 = false
// v) 4 == 4 = true
// vi) 4 === 4 = true
// vii) 4 != 4 = false
// viii) 4 !== 4 = false
// viiii) 4 != '4' = false
// x) 4 == '4' = true
// x) 4 === '4' = false
//Find the length of python and jargon and make a falsy comparison statement.
const p  = "python";
const j = "jargon";
const pp = p.length;
const jj = j.length;
console.log(pp!=jj);


//6)Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12)  false
// !(4 > 3 && 10 > 12)  true
// !(4 === '4')  true
// There is no 'on' in both dragon and python  o/p:- false

//7)Use the Date object to do the following activities

const date = new Date();
//What is the year today?
console.log(`Today Year:- ${date.getFullYear()} `);

//What is the month today as a number?
console.log(`Today Month:- ${date.getMonth()} `);


// What is the date today?
console.log(`Today Date:- ${date.getDate()} `);


// What is the day today as a number?
console.log(`Today Day:- ${date.getDay()} `);


// What is the hours now?
console.log(`Today Hours:- ${date.getHours()} `);


// What is the minutes now?
console.log(`Today Minutes:- ${date.getMinutes()} `);


// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`Today Second:- ${date.getTime()} `);