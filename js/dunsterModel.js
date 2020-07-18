var dModal = document.getElementById("dModal");

var dBtn = document.getElementById("dBtn");

var dSpan = document.getElementsByClassName("close d")[0];

dBtn.onclick = function() {
  dModal.style.display = "block";
}

dSpan.onclick = function() {
  nevelsonModal.style.display = "none";
}