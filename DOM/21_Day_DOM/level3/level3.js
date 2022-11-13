//DOM mini Project

//1) Develop the following application, use the following HTML elements to get started with.
//You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

//==>The year color is changing every 1 second
//==>The date and time background color is changing every on seconds
//==>Completed challenge has background green
//==>Ongoing challenge has background yellow
//==>Coming challenges have background red

const h1 = document.querySelector("span");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
setInterval(() => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const cc = Math.floor(Math.random() * hex.length);
    hexColor += hex[cc];
  }
  h1.style.color = hexColor;
}, 1000);

const h2 = document.getElementById("time");
const dd = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = months[dd.getMonth()];
const year = dd.getFullYear();
const date = dd.getDate();
date < 9 ? "0" + date : date;
const hour = dd.getHours();
hour < 9 ? "0" + hour : hour;
const minute = dd.getMinutes();
minute < 9 ? "0" + minute : minute;
const second = dd.getSeconds();
second < 9 ? "0" + second : second;
const dd1 = `${month} ${date}, ${year} ${hour}:${minute}:${second}`;

h2.textContent = dd1;
setInterval(() => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const cc = Math.floor(Math.random() * hex.length);
    hexColor += hex[cc];
  }
  h2.style.background = hexColor;
  h2.style.width = "400px";
}, 1000);

document.getElementById("one").style.background = "green";
document.getElementById("two").style.background = "yellow";
document.getElementById("three").style.background = "red";
document.getElementById("three").style.background = "red";
document.getElementById("three1").style.background = "red";
document.getElementById("three2").style.background = "red";
document.getElementById("three3").style.background = "red";
document.getElementById("three4").style.background = "red";
