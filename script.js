// FLIP EFFECT ===========================================
var front = document.querySelector(".champ-box-front");
var back = document.querySelector(".champ-box-back");
var jinxBox = document.querySelector("#jinx-box");
var heimmerBox = document.querySelector("#heimmer-box");
var kataBox = document.querySelector("#kata-box");
var luluBox = document.querySelector("#lulu-box");

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

kataBox.addEventListener("click", function () {
  if (kataBox.classList.contains("flipped")) {
    kataBox.classList.remove("flipped");
  } else {
    kataBox.classList.add("flipped");
  }
});

luluBox.addEventListener("click", function () {
  if (luluBox.classList.contains("flipped")) {
    luluBox.classList.remove("flipped");
  } else {
    luluBox.classList.add("flipped");
  }
});
