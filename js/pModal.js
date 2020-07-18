var pModal = document.getElementById("pModal");

var pBtn = document.getElementById("pBtn");

var pSpan = document.getElementsByClassName("close p")[0];

pBtn.onclick = function() {
  pModal.style.display = "block";
}

pSpan.onclick = function() {
  pModal.style.display = "none";
}