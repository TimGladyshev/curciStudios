/*Href interferes with data-target= so adding a js to also move to location*/
function moveTo(x) {
  window.location.hash = x;
}

var slider = document.getElementsByClassName('slider');

for (var i = 0; i < slider.length; i++) {
  var curSlider = slider[i];
  curSlider.addEventListener("click", function () {
    var child = this.children[1];
    if (child.style.maxHeight) {
      child.style.maxHeight = null;
    } else {
      child.style.maxHeight = child.scrollHeight + "px";
    }
  });
}
