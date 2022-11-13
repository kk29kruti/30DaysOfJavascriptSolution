//Flags are optional parameters in a regular expression which determine the type of searching.
//Let us see some of the flags:

// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

//Regular expression constructor no use kari ne

// without flag
let pattern = "love";
let regEx = new RegExp(pattern);
console.log("without flag", regEx); //expected o/p:-  /love/ (backslash)

// Declaring regular expression with global flag and case insensitive flag.
let flag = "gi";
let regEx1 = new RegExp(pattern, flag);
// let regEx = new RegExp('love','gi')
console.log("with flag", regEx);

//Creating a pattern without RegExp Constructor
let regEx2 = /love/gi;
console.log("regular expression without constructor:-", regEx2);

//test():- test method is used for match or check of given word into the string
//it returns true of false
const str = "I Love JavaScript";
const pattern1 = /love/i;
const result = pattern1.test(str);
console.log("Using test method:-", result);

//match():- match method is used for matching the word but it return the o/p in the form of array
//nd if u donot use global flag than it return the o/p in matching pattern,index,input and groups

//without using global flag with match method

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

//Expected o/p:- ["love", index: 2, input: "I love JavaScript", groups: undefined]

//with using global flag with match method

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result)

//Expected o/p:- ["love"]

//search():- search method is first match or test the word and if it is exists than it return index number otherwise -1

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result) //expected o/p :- 2

//replace() :- replace method replace the matching string with the given string

const txt =
  "Javascript is the worlds top language javascript is hard to learn and easy to forgot";

//first je match thase ena par j effect thase
// let matchedStr = txt.replace(/Javascript|javascript/, "Python");

//globally jetala pn hase badha par effect thase
let matchedStr = txt.replace(/Javascript|javascript/g, "Python");

//case insensitive and global
//let matchReplaced = txt.replace(/Javascript/gi, 'Python')
console.log(matchedStr);

// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// matches = txt.replace(/%/g, '')
// console.log(matches)

//[] :- A set of chrachters
//[a-c] :- a,b,c
//[a-z] :- a,b,c....,z
//[A-Z] :- A,B,...Z
//[0-3] :- 0,1,2,3
//[0-9] :- 0,1,2,3,4,5,6,7,8,9
//[A-Za-z0-9] :- A to Z,a to z,0 to 9

//  \: uses to escape special chrachters
// \d mean : match where the string contains digits (numbers from 0-9)
// \D mean : match where the string does not contain digits

// ^ (start with) => jo [^abc] means a,b,c sivaay na characters and ^[abc] means abc thi start thay em
// $ (end with) => sentence end e word thi thay
// . :- any character except new line
// * (zero or more time) => optional ya it may occur many times
// + (one or more times) => means at least once or more times
// ? (zero or one time)
// \n :- new line
// \t : tab
// \0 :- null character
// \YYY :- octal chracter
// \xYY :- Hexadecimal chracter
// \uYYYY :- hexadecimal chracter
// {3} Exactly 3 characters
// {3,} at least 3 characters
// {3,8} 3 to 8 characters (minimum :- 3 and maximum:-8)
// | : Either ya or

//square brackets :-
const pattern11 = "[Aa]pple"; // this square bracket means either A or a
const txt1 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches1 = txt1.match(pattern11);

console.log(matches1);

//expected o/p:-["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

// const pattern12 = /[Aa]pple/g; // this square bracket means either A or a
// const txt11 =
//   "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches = txt11.match(pattern12);

// console.log(matches);

//expected o/p:- ["Apple", "apple"]

// const cc = /[Aa]pple|[Bb]anana/g;
// const txt11 =
//   "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches = txt11.match(cc);

// console.log(matches);

//Escape character(\) in RegExp
// const pattern111 = /\d/g  // d is a special character which means digits
// const txt111 = 'This regular expression example was made in January 12,  2020.'
// const matches = txt111. match(pattern111)

// console.log(matches)

// const pattern111 = /\d/g;
// const txt111 = "This regular expression example was made in jan 12, 2020";
// const matches = txt111.match(pattern111);
// console.log(matches); // ["1", "2", "2", "0", "2", "0"], this is not what we want

//one or more times (+)
// const pattern111 = /\d+/g; // d is a special character which means digits
// const txt111 = "This regular expression example was made in January 12,  2020.";
// const matches = txt111.match(pattern111);

// console.log(matches); // ["12", "2020"], this is what we want

//period (.)
// const pattern111 = /[a]./g; // this square bracket means a and . means any character except new line
// const pattern111 = /[a].+/g; // this square bracket means a and . means any character except new line and + means one or more times
// const txt111 = "Apple and banana are fruits";
// const matches = txt111.match(pattern111);

// console.log(matches); // ["an", "an", "an", "a ", "ar"]
// console.log(matches); // ['and banana are fruits']

// const pattern111 = /[a].*/g; //. any character, * any character zero or more times
// const txt111 = "Apple and banana are fruits";
// const matches = txt111.match(pattern111);

// console.log(matches); // ['and banana are fruits']

//\w means word boundry (one word character)
// \b :-word bounder, matches with the beginning or ending of a word

// \w :- 1,2,3,4
//word boundry means exactly {} curly braces ma lakhelu hoy ne etala numbers of chracters o/p ma avu joiye
//{4} hatu toh 4chrachters na jetala words hase e return thava joiye
//{5} toh 5words hoy e rite

// const txt111 = "This regular expression example was made in December 6,  2019.";
// const pattern111 = /\b\w{1,4}\b/g; //  exactly four character words
// const matches = txt111.match(pattern111);
// console.log(matches); //['This', 'made', '2019']

// const txt111 =
//   "This regular expression example was made kkkk in December 6,  2019.";
// const pattern111 = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
// const matches = txt111.match(pattern111);
// console.log(matches); //['This','kkkk',made']

// const txt111 = "This regular expression example was made in December 6,  2019.";
// const pattern111 = /\d{4}/g; // a number and exactly four digits
// const matches = txt111.match(pattern111);
// console.log(matches); // ['2019']

// const txt111 = "This regular expression example was made in December 6,100 2019.";
// const pattern111 = /\d{1,4}/g; // 1 to 4
// const matches = txt111.match(pattern111);
// console.log(matches); // ['6', '2019']

//Negation
// [^] means Negation (not operator type)thay
///[^A-Za-z,. ]+/g; means A-Za-z sivaay na badha values hoy e return kare
//and . means period means koi pn chracter expect new line
// + means one or more times
// /[^A-Za-z,. ]+/g  === /\d+/g

// const txt111 = "This regular expression example was made in December 6,  2019.";
// const pattern111 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt111.match(pattern111);
// console.log(matches); // ["6", "2019"]

//Exact Match
// let pattern111 = /^[A-Z][a-z]{3,12}$/;
//here {3,12} means minimum limit 3 and maximum limit 12
//nd starting complusory Capital and then small letter ma thavu joiye
//^ start symbol
// $ end symbol
//test method check karse ke given string jem pattern apeli 6 em follow thay 6 if yes then return true
// let name = "Asabeneh";
// let result111 = pattern111.test(name);

// console.log(result111); // true
