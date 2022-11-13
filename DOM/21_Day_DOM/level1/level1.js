//1) Create an index.html file and put four p elements as above:
//Get the first paragraph by using document.querySelector(tagname) and tag name

const p = document.querySelector("p");
console.log(p);

//2) Get each of the the paragraph using document.querySelector('#id') and by their id

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

console.log(p1, p2, p3, p4);

//3) Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const p5 = document.querySelectorAll("p");
console.log(p5);

//4) Loop through the nodeList and get the text content of each paragraph
p5.forEach((title) => {
  console.log(title);
});

//5) Set a text content to paragraph the fourth paragraph,Fourth Paragraph
p4.textContent = "Hello Paragraph 4";

//6)Set id and class attribute for all the paragraphs using different attribute setting methods
p.className = "addClass";
p.classList.add("add1Class");
p.id = "addID";
console.log(p);
