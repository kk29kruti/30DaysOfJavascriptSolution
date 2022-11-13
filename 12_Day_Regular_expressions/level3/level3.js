//1.Writ a function which cleans text. Clean the following text.
//After cleaning, count three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
  let matches = sentence.replace(/%/g, "");
  let matches1 = matches.replace(/@/g, "");
  let matches2 = matches1.replace(/&/g, "");
  let matches3 = matches2.replace(/#/g, "");
  let matches4 = matches3.replace(/;/g, "");
  let matches5 = matches4.replace(/,/g, "");
  let matches6 = matches5.replace(/!/g, "");
  let matches7 = matches6.replaceAll("?", ""); //just know to use of replaceAll method
  let matches8 = matches7.replaceAll(".", "");
  let matches9 = matches8.replace(/\$/, "");
  console.log(matches9);
}

cleanText(sentence);

//diffrence between replce and replaceAll method:-
//The difference between replace() and replaceAll() method is that the replace() method
//replaces all the occurrences of old char with new char while replaceAll()
//method replaces all the occurrences of old string with the new string.

// Expected o/p:- I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// console.log(mostFrequentWords(cleanedText))
// [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]


let pattern = /\b[A-Za-z]{4}\b/g
let pattern1 = /\d{4}/g