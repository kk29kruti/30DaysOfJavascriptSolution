//1)Write a script that prompt the user to enter base and height of the triangle 
//and calculate an area of a triangle (area = 0.5 x b x h).


// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// const baseValue = prompt('Enter Base value');
// const heightValue = prompt('Enter Height Value');

// const area = 0.5 * baseValue * heightValue;
// console.log(area);


//2)Write a script that prompt the user to enter side a, side b, and side c of the triangle
// and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// const SideA = Number(prompt('Enter side a',5)); //second argument is optional 
// const SideB = Number(prompt('Enter side b',4));
// const SideC = Number(prompt('Enter side c',3));

// const perimeter =SideA+SideB+SideC;
// console.log(perimeter);

//3)Get length and width using prompt and calculate an area of rectangle (area = length 
//x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const l = Number(prompt('Enter Length'));
// const w = Number(prompt('Enter width'));

// const area = l * w;
// console.log(`Area of rectangle :- ${area}`);

// const p = 2*(l+w);
// console.log(p);


//4)Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
//and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const r = prompt('Enter a radius');
// const area = Math.PI*r*r;
// console.log(area);

// const circum = 2*Math.PI*r;
// console.log(circum);

//5)Calculate the slope, x-intercept and y-intercept of y = 2x -2

// const slope = prompt('Enter the slope value');
// const y = 2*slope - 2;
// console.log(y);

//6)Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) 
//and point(6,10)

// const y2=2;
// const y1 = 2;
// const x2=10;
// const x1=6;

// console.log(`slope m = ${(y2-y1)/(x2-x1)}`)

//7)Compare the slope of above two questions.

// const y=y2-y1; //2-2 = 0
// const x =x2-x1; //10-6 = 4

// const comp = y==x
// console.log(comp)

//8)Calculate the value of y (y = x2(square of 2) + 6x + 9). Try to use 
//different x values and figure out at what x value y is 0.

// const x = 0; x= -3 ;

//9)Writ a script that prompt a user to enter hours and rate per hour. 
//Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// const perH = prompt("Enter rate per hour",28);
// const hours = prompt("Enter hours",40);

// console.log(`Weekly earning is :- ${perH*hours}`)


//10)If the length of your name is greater than 7 say, your name is 
//long else say your name is short.

// const name = prompt('Enter your name');
// const length_OF_name = name > 7 ? "Name length is long" : "Name length is short";
// console.log(`length_OF_name :- ${length_OF_name}`);


//11)Compare your first name length and your family name length and 
//you should get this output.

// let firstName = prompt('Enter Your first Name');
// let lastName = prompt('Enter Your Last Name');

// if(firstName.length==lastName.length){
//     console.log("Both length is equal");
// }else if(firstName>lastName){
//     console.log("FirstName is Longer than LastName");
// }else{
//     console.log("LastName is Longer than FirstName");
// }

//12)Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// I am 225 years older than you.


//  let myAge = Number(prompt("Enter myAge",250));
// let yourAge = Number(prompt("Enter YourAge",25));

// console.log(myAge-yourAge);


//13)Using prompt get the year the user was born and if the user is 18 or above allow the user 
//to drive if not tell the user to wait a certain amount of years.

//  *****************************Start Hint*****************************

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

//  *****************************End Hint*****************************

//Note :- new Date only one argument hoy toh e milisecond rite treate karse
//atale year and month lakhu pade 

// 1) new Date() creates a new date object with the current date and time.

// 2) new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// January = 0 & December = 11.
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
// Specifying a day higher than max, will not result in an error but add the overflow to the next month:


// const year1 = prompt('Enter Your year & month & date');
// const year = new Date(year1);
// console.log(`Get Year of User:- ${year}`);

// //atyar no timing - born year no timing 
// let diff_of_ms = Date.now() - year.getTime();
// console.log(`Difference of Milisecond :- ${diff_of_ms}`);

// let age_dt = new Date(diff_of_ms);
// console.log(age_dt);

// let age = age_dt.getUTCFullYear() - 1970;
// //UTC(Co-ordinated Universal Time) timezone and local timezone of the computer (getFullYear)


// const y = age >=18  ? ("You can drive") : ("You cannot Drive u should wait for the amount of years")
// console.log(y);


//14)Write a script that prompt the user to enter number of years. Calculate the number 
//of seconds a person can live. Assume some one lives just hundred years

//  *****************************Start Hint*****************************
// Enter number of years you live: 100
// You lived 3153600000 seconds.
//  *****************************End Hint*****************************

// const year1 = prompt("Enter a Year to live");
// console.log(year1);

//1 minute = 60 seconds 1 hour = 60 minutes 1 day = 24 hours 1 year = 365 days = (365 x 24 x 60 x 60) = 31,536,000 seconds.
// Lastly, multiply the value by 1000 (1 second = 1000milliseconds) to get the milliseconds equivalent to the number of days.

//seconds = year*day*month*hours*min*second
//1 sec =1000 milisecond

// seconds = year1 *365* 24 * 60 * 60;
// console.log(seconds);


//15)Create a human readable time format using the Date time object
// i) YYYY-MM-DD HH:mm
// ii) DD-MM-YYYY HH:mm
// iii) DD/MM/YYYY HH:mm

//const date_format = new Date();

//console.log("YYYY-MM-DD HH:mm",date_format.getFullYear() + '-' + date_format.getMonth() + '-' + date_format.getDate() + " " + date_format.getHours()+ ':' + date_format.getMinutes());

// console.log("DD-MM-YYYY HH:mm",date_format.getDate() + '-' + date_format.getMonth() + '-' + date_format.getFullYear() + ' ' + date_format.getHours() + ':' + date_format.getMinutes());

//console.log('DD/MM/YYYY HH:mm',date_format.getDate() + '/' + date_format.getMonth() + '/' + date_format.getFullYear() + ' ' +date_format.getHours() + ':' + date_format.getMinutes());




