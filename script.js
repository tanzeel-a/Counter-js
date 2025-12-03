// On click, the reset button should change the number (whatever number it is) to zero. On forward, the direction of movement of the button should be positive and keep on increasing. For reverse, it should keep on subtracting minus one minus one from the number, and yeah that is the logic.

// set initial count
let count = 0;

// select the doms
const value = document.querySelector("#counter");
const button = document.querySelectorAll(".controls li");

// show initial value
value.textContent = count;

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnId = e.currentTarget.id;

    if (btnId === "Back") {
      count--;
    } else if (btnId === "Forward") {
      count++;
    } else if (btnId === "Reset") {
      count = 0;
    }

    value.textContent = count;
  });
});