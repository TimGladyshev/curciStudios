var mossModal = document.getElementById("mossModal");

var mossBtn = document.getElementById("mossBtn");

var mossSpan = document.getElementsByClassName("close moss")[0];

mossBtn.onclick = function() {
  mossModal.style.display = "block";
};

mossSpan.onclick = function() {
  mossModal.style.display = "none";
};