const sketchDiv = document.getElementById("container");
const addSquaresButton = document.getElementById("add-squares");

const drawPad = (squares) => {
  const padContainer = document.createElement("div");

  padContainer.classList = "sketch-pad-container";
  sketchDiv.appendChild(padContainer);
  for (let row = 0; row < squares; row++) {
    for (let col = 0; col < squares; col++) {
      let opacity = 10;

      const rowDiv = document.createElement("div");
      rowDiv.classList = "col";
      rowDiv.setAttribute(
        "style",
        `flex: 0 0 calc(100% / ${squares});
    background-color: white;`
      );
      rowDiv.addEventListener("mouseenter", (e) => {
        const randColor = [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ];
        rowDiv.style.backgroundColor = `rgba(${randColor[0]},${randColor[1]},${randColor[2]},${opacity}%)`;
        opacity += 10;
      });
      padContainer.append(rowDiv);
    }
  }
};

addSquaresButton.addEventListener("click", () => {
  const squares = parseInt(prompt("Add squares maximum is 100"));
  if (squares > 100 || !squares) return;
  else {
    document.getElementById(
      "num-squares"
    ).textContent = ` Number of squares: ${squares}`;
    document.querySelector(".sketch-pad-container").remove();
    drawPad(squares);
  }
});
drawPad(16);
