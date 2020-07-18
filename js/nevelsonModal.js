var nevelsonModal = document.getElementById("nevelsonModel");

var nevelsonBtn = document.getElementById("nevelsonBtn");

var nevelsonSpan = document.getElementsByClassName("close nevelson")[0];

nevelsonBtn.onclick = function() {
  nevelsonModal.style.display = "block";
}

nevelsonSpan.onclick = function() {
  nevelsonModal.style.display = "none";
}
