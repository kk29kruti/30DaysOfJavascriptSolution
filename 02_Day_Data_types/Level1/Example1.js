//1)Declare a variable named challenge and assign it to an initial 
//value '30 Days Of JavaScript'.

let a = '30 Days Of JavaScript';


//2)Print the string on the browser console using console.log()
console.log(a);


//3)Print the length of the string on the browser console using console.log()
console.log(a.length);

//4)Change all the string characters to capital letters using toUpperCase() method
console.log(a.toUpperCase());

//5)Change all the string characters to lowercase letters using toLowerCase() method
console.log(a.toLowerCase());

//6)Cut (slice) out the first word of the string using substr() or substring() method
console.log(a.substring(0,2));

//7)Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(a.substring(3,21));

//8)Check if the string contains a word Script using includes() method
console.log(a.includes('Script'));

//9)Split the string into an array using split() method
console.log(a.split());

//10)Split the string 30 Days Of JavaScript at the space using split() method
console.log(a.split(''));

//11)'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let b = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(b.split(','))

//12)Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let c = "30 Days Of JavaScript";
console.log(c.replace("JavaScript","Python"));

//13)What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let d = '30 Days Of JavaScript';
console.log(d.charAt(15));

//14)What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let e = d.indexOf("J");
console.log(e);
console.log(d.charCodeAt(e));

//15)Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(d.indexOf('a'));

//16)Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(d.lastIndexOf('a'));

//17)Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let g ='You cannot end a sentence with because because because is a conjunction';
console.log(g.indexOf('because'))

//18)Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(g.lastIndexOf('because'))

//19)Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(g.search('because'))

//20)Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let h = ' 30 Days Of JavaScript ';
console.log(h.trim());

//21)Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let i = '30 Days Of JavaScript';
console.log(i.startsWith(30));

//22)Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(i.endsWith('JavaScript'));

//23)Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(i.match(/a/gi));

//24)Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let gg = '30 Days of ';
let hh= 'JavaScript';
console.log(gg.concat(hh));

//25)Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(i.repeat(2));