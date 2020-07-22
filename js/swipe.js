$(document).ready(function() {
  $('.swipeAble').swipe( {
    swipeLeft:function() {
      $(this).carousel('next');
    },
    swipeRight: function() {
      $(this).carousel('prev');
    },
    threshold:75
  });
});