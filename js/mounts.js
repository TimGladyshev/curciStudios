var restButton = document.getElementById("restBtn");
var monButton = document.getElementById('monBtn');
var mountsButton = document.getElementById('mountsBtn');

var restCar = document.getElementById("rcarousel-with-lb");
var monCar = document.getElementById("moncarousel-with-lb");
var mountCar = document.getElementById("mtcarousel-with-lb");


restCar.style.display = "block";
monCar.style.display = "none";
mountCar.style.display = "none";

restButton.style.backgroundColor = "rgba(255,255,255,.7)";

function restorationClick() {
  restButton.style.backgroundColor = "rgba(255,255,255,.7)";
  monButton.style.backgroundColor = "rgba(255,255,255,.3)";
  mountsButton.style.backgroundColor = "rgba(255,255,255,.3)";

  restCar.style.display = "block";
  monCar.style.display = "none";
  mountCar.style.display = "none";
};

function monumentsClick() {
  restButton.style.backgroundColor = "rgba(255,255,255,.3)";
  monButton.style.backgroundColor = "rgba(255,255,255,.7)";
  mountsButton.style.backgroundColor = "rgba(255,255,255,.3)";

  restCar.style.display = "none";
  monCar.style.display = "block";
  mountCar.style.display = "none";
};

function mountsClick() {
  restButton.style.backgroundColor = "rgba(255,255,255,.3)";
  monButton.style.backgroundColor = "rgba(255,255,255,.3)";
  mountsButton.style.backgroundColor = "rgba(255,255,255,.7)";

  restCar.style.display = "none";
  monCar.style.display = "none";
  mountCar.style.display = "block";
};

restButton.onclick = function () {
  restorationClick();
};

monButton.onclick = function () {
  monumentsClick();
};

mountsButton.onclick = function () {
  mountsClick();
};

