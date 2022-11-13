//1)Declare a function fullName and it print out your full name.

// function fullName() {
//   console.log("My Name is Kruti");
// }
// fullName();

//2)Declare a function fullName and now it takes
//firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// console.log("Full name is ", fullName("Kruti", "Patel"));

//3)Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(a, b) {
//   return a + b;
// }
// console.log("Sum of two numbers", addNumbers(2, 2));

//4)An area of a rectangle is calculated as follows: area = length x width.
//Write a function which calculates areaOfRectangle.

// function areaOfRectangle(length, width) {
//   return length * width;
// }
// console.log("area of rectangle", areaOfRectangle(2, 2));

//5)A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length, width) {
//   return 2 * (length + width);
// }
// console.log("perimeter Of Rectangle", perimeterOfRectangle(2, 2));

//6)A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//Write a function which calculates volumeOfRectPrism.

// function volumeOfRectPrism(length, width, height) {
//   return length * width * height;
// }
// console.log("volume Of RectPrism", volumeOfRectPrism(2, 3, 4));

//7)Area of a circle is calculated as follows: area = π x r x r.
//Write a function which calculates areaOfCircle

// function areaOfCircle(radius) {
//   return radius * radius * Math.PI;
// }
// console.log("area Of Circle", areaOfCircle(2));

//8)Circumference of a circle is calculated as follows: circumference = 2πr.
//Write a function which calculates circumOfCircle

// function circumOfCircle(radius) {
//     return 2*Math.PI * radius ;
// }
// console.log("circum Of Circle",circumOfCircle(2))

//9)Density of a substance is calculated as follows:density= mass/volume.
//Write a function which calculates density.

// function density(mass, volume) {
//   return mass / volume;
// }
// console.log("density", density(2, 2));

//10)Speed is calculated by dividing the total distance covered by a moving object
//divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

//11)Weight of a substance is calculated as follows: weight = mass x gravity.
//Write a function which calculates weight.

// function weight(mass, gravity) {
//     return mass * gravity;

// }
// console.log("weight",weight(2, 2))

//12)Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
//Write a function which convert oC to oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(C) {
//   return (C * 9) / 5 + 32;
// }
// console.log(
//   "convert Celsius To Fahrenheit",
//   `${convertCelsiusToFahrenheit(2)}F`
// );

//13)Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//Write a function which calculates bmi.
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

// i) The same groups apply to both men and women.
// ii) Underweight: BMI is less than 18.5
// iii) Normal weight: BMI is 18.5 to 24.9
// vi) Overweight: BMI is 25 to 29.9
// vii) Obese: BMI is 30 or more

// function BMI(weight, height) {
//   let h = height * 100;
//   const bmi = Math.ceil((weight / (h * h)).toFixed(1));
//   if (bmi < 18.5) {
//     console.log(`underWeight: ${bmi} is less than 18.5`);
//   } else if (bmi >= 18.5 || bmi <= 24.9) {
//     console.log(`Normal weight: ${bmi} is 18.5 to 24.9`);
//   } else if (bmi >= 25 || bmi <= 29.9) {
//     console.log(`Overweight: ${bmi} is 25 to 29.9`);
//   } else if (bmi >= 30) {
//     console.log(`Obese: ${bmi} is 30 or more`);
//   }
//   return bmi;
// }

// console.log("BMI:- Body mass index", BMI(52, 157));

//14)Write a function called checkSeason, it takes a month parameter and
//returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(month) {
//   switch (month.toLowerCase()) {
//     case "january":
//       return "Winter";
//     case "february":
//       return "Winter";
//     case "march":
//       return "Spring";
//     case "april":
//       return "Spring";
//     case "may":
//       return "Spring";
//     case "june":
//       return "Summer";
//     case "july":
//       return "Summer";
//     case "august":
//       return "Winter";
//     case "september":
//       return "Autumn";
//     case "october":
//       return "Autumn";
//     case "october":
//       return "Autumn";
//     case "november":
//       return "Autumn";
//     case "december":
//       return "Summer";
//   }
// }

// console.log("check Season", checkSeason("january"));

//15)Math.max returns its largest argument. Write a function findMax
//that takes three arguments and returns their maximum with out using Math.max method.
//expected o/p:- console.log(findMax(0, 10, 5))
//10
//console.log(findMax(0, -10, -2))
//0

// function findMax() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (sum < arguments[i]) {
//       sum = arguments[i];
//     }
//   }
//   return sum;
// }
// console.log("maximum number", findMax(34, 10, 3, 22, 60));
