function showToast() {
  var toast = document.getElementById("toast");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 5000);
}

function hoverInfo() {
  var info = document.getElementById("info");
  info.style.display = "block";
}

function infoOut() {
  var info = document.getElementById("info");
  info.style.display = "none";
}