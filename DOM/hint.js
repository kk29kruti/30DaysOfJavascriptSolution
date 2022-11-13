//DOM :- document object model

//getting elements by TagName :-
document.getElementsByTagName("tagename");

//An HTMLCollection does not support all array methods therefore we should use regular for loop
//instead of forEach.

//querySelectorAll e nodelist (array of object) na form ma o/p apse so ena par forEach loop lagse

//getting elements by classname:-
document.getElementsByClassName("classname");

//getting elements by id:-
document.getElementById("idname");

//getting elements by querySelector :-
document.querySelector("tagname or classname or idname");
document.querySelector("h1");
document.querySelector(".hero");
document.querySelector("#hero1");

//getting elements by querySelectorAll :- (class and tagname mate j use thay)
document.querySelectorAll(".hero");
document.querySelectorAll("h1");

//diffrence between querySelector and querySelectorAll :- querySelector thi je first element madse ene access kari lese
//jayre querySelectorAll e badha element ne access karse etala mate ema tagname and classname j argument pass thay 6

//adding class using classList:- classname alreday exist hase toh enu orignal class par override
//nahi thay and bija je classname pass kariya hase e add thai jas
titles.classList.add("oneclass", "twoclass", "....multipleclass");

//removing element from class :- specific class ne remove kari sakay
titles.classList.remove("oneclass", "multipleclass");

//specific node ma text content set or get karva mate use thay textContent Property
//Html content na element ne set and get karva mate innerHTML property use thay

//innerHTML property e badha Parent element na children ne remove karva mate permisson ape 6
ul.innerHTML = "";

//creating an element
document.createElement("tagname");

//appending child to a parent element
//The document.body support the appendChild() method.
document.body.appendChild(title);

//removing a child element from a parent node
//removeChild() method
// const ul = document.querySelector('ul')
// const lists = document.querySelectorAll('li')
// for (const list of lists) {
//     ul.removeChild(list)

// }

//best way
// const ul = document.querySelector('ul')
// ul.innerHTML = ''
//The above snippet of code cleared all the child elements.

//event Listeners
selectedElement.addEventListener("eventlistner", function (e) {
  // the activity you want to occur after the event will be in here
});
// or

selectedElement.addEventListener("eventlistner", (e) => {
  // the activity you want to occur after the event will be in here
});
// inline form
//   <body>
//   <button onclick="clickMe()">Click Me</button>
//   <script>
//     const clickMe = () => {
//       alert('We can attach event on HTML element')
//     }
//   </script>
// </body>

//By addEventListener help
{
  /* <body>
<button>Click Me</button>

<script>
  const button = document.querySelector('button')
  button.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
      'e.target.textContent gives content of selected element: ',
      e.target.textContent
    )
  })
</script>
</body> */
}

//inline ma On complusory ave nd script ma On na ave

//List of events:==
//click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page
