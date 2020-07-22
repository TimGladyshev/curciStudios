let car = $("#scarousel-with-lb");

$(document).ready( function() {
  console.log("document ready");
  car.on("swiperight", function() {
    console.log("swiperight detected");
    $(this).carousel('prev');
  });

  car.on("swipeleft", function() {
    $(this).carousel('next')
  });
})