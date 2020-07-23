var pModal = document.getElementById("pModal");

var pBtn = document.getElementById("pBtn");

var pSpan = document.getElementsByClassName("close p")[0];

pBtn.onclick = function() {
  pModal.style.display = "block";
}

pSpan.onclick = function() {
  pModal.style.display = "none";
}

var mossModal = document.getElementById("mossModal");

var mossBtn = document.getElementById("mossBtn");

var mossSpan = document.getElementsByClassName("close moss")[0];

mossBtn.onclick = function() {
  mossModal.style.display = "block";
}

mossSpan.onclick = function() {
  mossModal.style.display = "none";
}