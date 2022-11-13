const url = "data.json";

let div = document.querySelector(".container");

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    response.forEach((res) => {
      let box = document.createElement("div");
      box.textContent = res.name;
      box.style.width = "150px";
      box.style.height = "180px";
      box.style.backgroundColor = "white";
      box.style.margin = "8px";
      box.style.textTransform = "uppercase";
      box.style.boxShadow = "0 3px 3px rgba(0, 0, 0, 0.2)";
      div.appendChild(box);
    });
  })
  .catch((err) => console.error(err));
