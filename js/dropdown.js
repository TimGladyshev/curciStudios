/*Href interferes with data-target= so adding a js to also move to location*/
function moveTo(x) {
  window.location.hash = x;
}

let btn = document.getElementsByClassName('nav-item');

/* this makes sure that dropdown doesnt show in condensed nav*/
$(window).on('resize load', function() {
  if(window.innerWidth < 1200){
    let ddcont = document.getElementsByClassName("finder");
    [].forEach.call(ddcont, function (x) {
      x.classList.remove('drop-down-content');
    });
  } else {
    let ddcont = document.getElementsByClassName("finder");
    [].forEach.call(ddcont, function (y) {
      y.classList.add('drop-down-content');
    });
  }
});