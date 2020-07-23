var mModal = document.getElementById("mModal");
var mossModal = document.getElementById("mossModal");
var nevelsonModal = document.getElementById("nevelsonModel");
var pModal = document.getElementById("pModal");

var mBtn = document.getElementById("mBtn");
var mossBtn = document.getElementById("mossBtn");
var nevelsonBtn = document.getElementById("nevelsonBtn");
var pBtn = document.getElementById("pBtn");

var mSpan = document.getElementsByClassName("close m")[0];
var mossSpan = document.getElementsByClassName("close moss")[0];
var nevelsonSpan = document.getElementsByClassName("close nevelson")[0];
var pSpan = document.getElementsByClassName("close p")[0];


mBtn.onclick = function() {
  mModal.style.display = "block";
};
mossBtn.onclick = function() {
  mossModal.style.display = "block";
};
nevelsonBtn.onclick = function() {
  nevelsonModal.style.display = "block";
};
pBtn.onclick = function() {
  pModal.style.display = "block";
};


mSpan.onclick = function() {
  mModal.style.display = "none";
};
mossSpan.onclick = function() {
  mossModal.style.display = "none";
};
nevelsonSpan.onclick = function() {
  nevelsonModal.style.display = "none";
};
pSpan.onclick = function() {
  pModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === mModal) {
    mModal.style.display = "none";
  } else if (event.target === dModal) {
    dModal.style.display = "none";
  } else if (event.target === nevelsonModal) {
    nevelsonModal.style.display = "none";
  } else if (event.target === pModal) {
    pModal.style.display = "none";
  } else if (event.target === mossModal) {
    mossModal.style.display = "none";
  }
};