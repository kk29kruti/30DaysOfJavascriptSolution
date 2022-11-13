let keyName = document.querySelector(".key");
let keyCode = document.querySelector(".key-code");

let keyMessageDefault = `<h1>Press any Keyboard Key </h1>`;
keyName.innerHTML = keyMessageDefault;
keyCode.style.display = "none";

//keydown :- keyPress thi Keyboard ni keys j malse nd keyDown thi akha keyboard nu badhu j malse

document.body.addEventListener("keydown", function (e) {
  let keyMessage = `<h1>you pressed <span class="green">${e.key}</span></h1>`;
  keyName.innerHTML = keyMessage;

  keyCode.style.display = "block";
  let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`;
  keyCode.innerHTML = keyCodeMessage;
});
