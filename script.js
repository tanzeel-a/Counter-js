
// This section sets the initial count value to 0
let count = 0;

// This section selects the DOM elements:
// 'value' will display the counter, 'button' refers to all control buttons
const value = document.querySelector("#counter");
const button = document.querySelectorAll(".controls li");

// This section displays the initial value of the counter in the UI
value.textContent = count;

// This section adds click event listeners to each button
button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnId = e.currentTarget.id; // Get ID of the clicked button

    // This section handles button click logic
    if (btnId === "Back") {
      // For the 'Back' button, decrement the count by 1
      count--;
    } else if (btnId === "Forward") {
      // For the 'Forward' button, increment the count by 1
      count++;
    } else if (btnId === "Reset") {
      // For the 'Reset' button, reset the count to 0
      count = 0;
    }

    // This section updates the counter in the UI after button interaction
    value.textContent = count;
  });
});
