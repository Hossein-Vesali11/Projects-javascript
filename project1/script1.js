// *********************************************
//The first route for the project

const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    if (count.innerHTML > 0) {
      count.style.color = "#00c000";
    }
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    if (count.innerHTML == 0) {
      count.style.color = "#fff";
    }
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    if (count.innerHTML < 0) {
      count.style.color = "#ff0909";
    }
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "#00c000";
  }
  if (count.innerHTML == 0) {
    count.style.color = "#fff";
  }
  if (count.innerHTML < 0) {
    count.style.color = "#ff0909";
  }
}
// *********************************************
// *********************************************
// The second route for the project

// const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const subtract = document.querySelector(".subtract");
// add.addEventListener("click", () => {
//   count.innerHTML++;
//   count.style.color = "#00c000";
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
//   count.style.color = "#fff";
// });

// subtract.addEventListener("click", () => {
//   count.innerHTML--;
//   count.style.color = "#ff0909";
// });
// *********************************************
