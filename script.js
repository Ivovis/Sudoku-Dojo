document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const row = Math.floor(i / 9);
    const col = i % 9;
    cell.dataset.row = row;
    cell.dataset.col = col;

    cell.contentEditable = true;
    cell.setAttribute("maxlength", "1");
    cell.setAttribute("inputmode", "numeric");

    cell.addEventListener("keydown", (e) => {
      if (
        !/[1-9]/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "ArrowLeft" &&
        e.key !== "ArrowRight"
      ) {
        e.preventDefault();
      }
    });

    cell.addEventListener("focus", () => {
      cell.style.backgroundColor = "#e0f7fa";
    });
    cell.addEventListener("blur", () => {
      cell.style.backgroundColor = "";
    });

    gridContainer.appendChild(cell);
  }
  console.log("Sudoku grid created!");
});
