$(function() {
  $('.carousel.lazy-load').bind('slide.bs.carousel', function (e) {
    let image = $(e.relatedTarget).find('figure img[data-src]');
      image.attr('src', image.data('src'));
      image.removeAttr('data-src');
  });
});