let container = document.querySelector("#container");
let div = document.querySelector("div");
let button = document.querySelector("#change");

let amount = 16;

function createGrid() {
    for (i = 0; i < (amount * amount); i++) {
        let element = document.createElement("div");
        let dims = (800 / amount) + "px";
        element.className = "pixel";
        element.style.height = dims;
        element.style.width = dims;
        container.appendChild(element);
    };
  }

createGrid();

container.onmouseover = (e) => {
    e.target.style.backgroundColor = "black";
}

button.addEventListener("click", function() {
    amount = prompt("How many squares per edge? (You can choose between 2 and 100)");
      if (amount <= 100 && amount >= 2) {
      container.innerHTML = "";
      createGrid();
    } else {
      alert("Enter a number between 2 and 100");
    }
});

// DOES SAME THING AS ABOVE
// container.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "black";
// });