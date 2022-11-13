//Check the requirement of this project from both images(jpg and gif).
// All the data and CSS has been implemented using JavaScript only.
// The data is found on starter folder project_3. The drop down button has been
//created using details HTML element.

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
}, 1000);

document.getElementById("python").style.background = "green";
document.getElementById("javascript").style.background = "yellow";
document.getElementById("htmlCss").style.background = "red";
document.getElementById("React").style.background = "red";
document.getElementById("FullStack").style.background = "red";
document.getElementById("DataAnalysis").style.background = "red";
document.getElementById("ReactNative").style.background = "red";
document.getElementById("MachineLearning").style.background = "red";
