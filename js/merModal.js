var mModal = document.getElementById("mModal");

var mBtn = document.getElementById("mBtn");

var mSpan = document.getElementsByClassName("close m")[0];

mBtn.onclick = function() {
  mModal.style.display = "block";
}

mSpan.onclick = function() {
  mModal.style.display = "none";
}

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
}