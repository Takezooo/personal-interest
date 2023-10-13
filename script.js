// FLIP EFFECT ===========================================
var front = document.querySelector(".champ-box-front");
var back = document.querySelector(".champ-box-back");
var jinxBox = document.querySelector("#jinx-box");
var heimmerBox = document.querySelector("#heimmer-box");

jinxBox.addEventListener("click", function () {
  if (jinxBox.classList.contains("flipped")) {
    jinxBox.classList.remove("flipped");
  } else {
    jinxBox.classList.add("flipped");
  }
});

heimmerBox.addEventListener("click", function () {
  if (heimmerBox.classList.contains("flipped")) {
    heimmerBox.classList.remove("flipped");
  } else {
    heimmerBox.classList.add("flipped");
  }
});
