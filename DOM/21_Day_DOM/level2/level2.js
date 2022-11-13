//1) Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const p = document.querySelectorAll("p");
console.log(p);
// p.forEach((p) => {
//   p.style.color = "pink";
//   p.style.background = "black";
//   p.style.border = "2px solid green";
//   p.style.fontSize = "40px";
//   p.style.fontFamily = "Helvetica";
// });

//2) Select all paragraphs and loop through each elements and give the first and third paragraph a color
//of green, and the second and the fourth paragraph a red color

// p.forEach((p, i) => {
//   if (i % 2 == 0) {
//     p.style.color = "green";
//   } else {
//     p.style.color = "red";
//   }
// });

//3) Set text content, id and class to each paragraph

// p.className = "paragraphClass";
// p.id = "paragraphID";
// p.textContent = "POP";
