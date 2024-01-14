const container = document.querySelector('#container');

function createGrid(type, amount) {
    for (i = 0; i < amount; i++) {
        let element = document.createElement(type);
        container.appendChild(element);
    };
  }

createGrid('div', 16);
