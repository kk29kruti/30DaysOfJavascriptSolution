//1)'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let aaa = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const occurrences = aaa.match(/love/gi); // (g is is for match all occurrences, i is for case insensitive)
console.log("number of occurrences of 'love'", occurrences);
console.log("number of occurrences of 'love'", occurrences.length);

//2)Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let bbb = 'You cannot end a sentence with because because because is a conjunction';
console.log("number of occurrences of 'because'",bbb.match(/because/gi));

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it
//returns null. It starts with / sign and ends with / sign.


//3)Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//diffrence between replace and regularExpression :-
// =>replace method specially regularExpression mate use thay and replaceAll method non-global regularExpression mate use thay 

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching;;'

const clean = sentence.replace(/%/g,'')
const clean1 = clean.replace(/@/g,'')
const clean2 = clean1.replaceAll('$','')
const clean3 = clean2.replace(/&/g,'')
const clean4 = clean3.replace(/#/g,'')
const clean5 = clean4.replace(/;/g,'')
const clean6 = clean5.replace(/!/g,'')
console.log(clean6);

// I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching

//4)Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arr = incomeStr.match(/\d+/g);  //(d means digit and g means global) & (+)one or more of the expression
let totalAnualIncome = (+arr[0] + +arr[1] + +arr[2]) * 12 ;
console.log("Total anual Income",totalAnualIncome);
