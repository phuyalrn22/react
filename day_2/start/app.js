var value = 0;

const valueNode = document.getElementById("value");
valueNode.innerHTML = value;
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", (e) => {
  if (value < 20) {
    value++;
    valueNode.innerHTML = value;
  } else {
    alert("Limit reached");
  }
});

decreaseButton.addEventListener("click", (e) => {
  if (value > 0) {
    value--;
    valueNode.innerHTML = value;
  } else {
    alert("must be more than 1");
  }
});
