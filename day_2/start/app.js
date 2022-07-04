var value = 0;

var a = "My Name is: ";
var name = "Aryan Phuyal";
var isFirst = "true";

const valueNode = document.getElementById("value");
valueNode.innerHTML = value;
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const saveButton = document.getElementById("save");
const savedResult = document.getElementById("savedResult");

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

saveButton.addEventListener("click", (e) => {
  if (isFirst) {
    isFirst = false;
    savedResult.innerHTML += value;
  } else {
    savedResult.innerHTML += "-" + value;
  }
});
