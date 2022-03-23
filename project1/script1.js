// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const subtract = document.querySelector(".subtract");
const count = document.querySelector(".count");

// **********************************// **********************************
// روش اول برای پیاده سازی
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    // if (count.innerHTML > 0) {
    //   count.style.color = "#00c000";
    // }
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    // if (count.innerHTML == 0) {
    //   count.style.color = "#fff";
    // }
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    // if (count.innerHTML < 0) {
    //   count.style.color = "#ff0909";
    // }
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

// **********************************// **********************************
// روش دوم برای پیاده سازی
// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

// subtract.addEventListener("click", () => {
//   count.innerHTML--;
// });
