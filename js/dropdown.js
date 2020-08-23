/*Href interferes with data-target= so adding a js to also move to location*/
function moveTo(x) {
  window.location.hash = x;
}

/*var btn = document.getElementsByClassName('nav-item');*/
/* this makes sure that dropdown doesnt show in condensed nav*/
$(window).on('resize load', function() {
  var ddcont = document.getElementsByClassName("finder");
  if(window.innerWidth < 1200){
    [].forEach.call(ddcont, function (x) {
      x.classList.remove('drop-down-content');
    });
  } else {
    [].forEach.call(ddcont, function (y) {
      y.classList.add('drop-down-content');
    });
  }
});

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
