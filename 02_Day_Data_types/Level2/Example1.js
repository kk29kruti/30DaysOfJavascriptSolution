//1)Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let aa = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(aa);


//2)Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let bb = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(bb);

//3)Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let cc = '10';
console.log("typeof '10' value is: ",typeof(cc));
let cc2 = 10;
console.log("typeof 10 value is: ",typeof(cc2));
let cc3 = parseInt(cc);
console.log(cc3==cc2);

//using conditional operator

if(typeof(cc) != typeof(cc2)){
    parseInt(cc);
    console.log(cc == cc2)
}

//4)Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let dd = parseFloat('9.8');
console.log("float value of dd variable: ",dd);
console.log("parseFloat('9.8') is equal to the 10 :",Math.ceil(dd));

//5)Check if 'on' is found in both python and jargon
let ee = "python";
let ee1 = 'jargon';
console.log("on is exist in ee variable or not :",ee.includes('on'));
console.log("on is exist in ee1 variable or not :",ee1.includes('on'));


//6)I hope this course is not full of jargon. Check if jargon is in the sentence.
let ff = 'I hope this course is not full of jargon';
console.log("jargon is exist in the ff variable or not: ",ff.includes('jargon'))

//7)Generate a random number between 0 and 100 inclusively.
let kk = Math.floor(Math.random() * 100 + 1);
console.log("Generate a random number between 0 and 100: ",kk);

//8)Generate a random number between 50 and 100 inclusively.
//Math.random() * 50  => 0 to 49 and plus 51 means 0 to 50 numbers include karse 
//50+51 = 101 and 50 to 100 between random number generate 
let ii = Math.floor(Math.random() * 50 + 51)

//let ii = Math.floor(Math.random() * 50 )+ 51 both are same multuplication is first priority so
console.log("Generate a random number between 50 and 100",ii);

//9)Generate a random number between 0 and 255 inclusively.

let jj = Math.floor(Math.random() * 256)
console.log("Generate a random number between 0 and 255",jj);

//10)Access the 'JavaScript' string characters using a random number.
//Explanations :- you will learn to write a JavaScript program that will generate strings of any size by picking 
//characters randomly from A-Z, a-z, and 0-9.
const Chracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getString(length){
    let result = "";
    const chracterLength = Chracters.length;
    for(let i =0; i< length;i++){
        result += Chracters.charAt(Math.floor(Math.random() * chracterLength));
    }
    return result;
}
console.log(getString(5));


//11)Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log(`1\t 1\t 1\t 1\t 1\t`);
console.log(`2\t 1\t 2\t 4\t 8\t`);
console.log(`3\t 1\t 3\t 9\t 27\t`);
console.log(`4\t 1\t 4\t 16\t 64\t`);
console.log(`5\t 1\t 5\t 25\t 125\t`);

//12)Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let yy = 'You cannot end a sentence with because because because is a conjunction';
console.log(yy.indexOf('because'));
console.log(yy.lastIndexOf('because'));
console.log(yy.substring(31,54));

