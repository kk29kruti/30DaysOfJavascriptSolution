// 1)Write a program which tells the number of days in a month.

//diffrence between getDate() method and getDay() method 
// getDate method date object no specific month no day return kare ((1 to 31) )
// getDay method date object no specific week no day return kare means sunday (0) and monday (1) ((0 to 6))

//with leap year (366days)
//// Here January is 1 based

const year = prompt('Enter a year');
const month = prompt('Enter a month');
const leap = new Date(year,month,29).getDate() === 29


//third argument apvu complusory 6 otherwise unexpected o/p ave 
let days = new Date(year,month,0).getDate()
console.log(`Days in month ${days}`);

if(!month){
   console.log("Enter month");
}else if(days === 31){
   console.log(`${month} has ${days} days`);
}else if(days === 30){
   console.log(`${month} has ${days} days`);
}else if(days === 29){
   console.log(`${month} has ${days} days`);
}else{
   console.log(`${month} has 28 days`)
}


if(!year){
   console.log("Enter year");
}else if(leap){
   console.log(`${year} is a leap year`);
}else{
   console.log(`${year} is not a leap year`)
}





