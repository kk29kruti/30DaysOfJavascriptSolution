// //3.1.The following is an array of 10 students ages:
//Sort the array and find the min and max age
const ages = [19, 22, 39, 32, 20, 55, 26, 29, 25,24]
const sort_age = ages.sort();
console.log('sort method',sort_age);
// console.log('join method',ages.join(", ")) 
const min = ages[0]
const max = ages[ages.length-1]
console.log(`Minimum: ${min}, Maximum: ${max}`) 

// //without using sort method
// // let ages1 = [19,22,19,24,20,25,26,24,25,24];
// // for(let i =0; i< ages1.length; i++){
// //     for(let j=i+1;j<ages1.length; j++){
// //         if(ages1[i] > ages1[j]){
// //             temp = ages1[i];
// //             ages1[i] = ages1[j];
// //             ages1[j] = temp;
// //         }
// //     }
// // }
// // console.log("sorted array =>",ages1);


// // Find the median age(one middle item or two middle items divided by two)
const leng = sort_age.length
// console.log(leng); //even and 10 number 
// const leng_2 = leng/2 -1;
// console.log("leng_2",leng_2);
const leng1 = leng/2
console.log("leng1",leng1);
//even number 
const median = (sort_age[leng/2] + sort_age[leng/2 + 1])/2;
console.log("median",median);
//odd number 
// const median1 = (sort_age[leng1]);
// console.log("median1",median1);

// // Find the average age(all items divided by number of items)
let sum = 0;
let avg;
for(let i=0;i<ages.length;i++){
   sum = sum + ages[i];
  avg = sum /ages.length ;
}
console.log("sum of total number",sum);
console.log("average of total number",avg);


// // Find the range of the ages(max minus min)
// // Compare the value of (min - average) and (max - average), use abs() method 
const compare = Math.floor(Math.abs(min-avg)) === Math.floor(Math.abs(max-avg))
console.log("min-avg",Math.floor(Math.abs(min-avg)));
console.log("max-avg",Math.floor(Math.abs(max-avg)));
console.log("Compare of min and max",compare);




