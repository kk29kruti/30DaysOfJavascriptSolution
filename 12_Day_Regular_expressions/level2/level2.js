//1.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(paragraph) {
  const pattern = /[Ll]ove/g;
  const matches = paragraph.match(pattern);
  let l1 = matches.length;
  const pattern1 = /[Yy]ou/g;
  const matches1 = paragraph.match(pattern1);
  let l2 = matches1.length;
  const pattern2 = /[cC]an/g;
  const matches2 = paragraph.match(pattern2);
  let l3 = matches2.length;
  const pattern3 = /[wW]hat/g;
  const matches3 = paragraph.match(pattern3);
  let l4 = matches3.length;
  const pattern4 = /[tT]eaching/g;
  const matches4 = paragraph.match(pattern4);
  let l5 = matches4.length;
}

console.log(tenMostFrequentWords(paragraph));

// [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]

// console.log(tenMostFrequentWords(paragraph, 10));

// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
