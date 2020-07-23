$(function() {
  $('.carousel.lazy-load').bind('slide.bs.carousel', function (e) {
    let image = $(e.relatedTarget).find('.o img[data-src]');
    image.attr('src', image.data('src'));
    image.removeAttr('data-src');

    let image2 = $(e.relatedTarget).find('.t img[data-src]');
    image2.attr('src', image2.data('src'));
    image2.removeAttr('data-src');

    let image3 = $(e.relatedTarget).find('.th img[data-src]');
    image3.attr('src', image3.data('src'));
    image3.removeAttr('data-src');

    let image4 = $(e.relatedTarget).find('.f img[data-src]');
    image4.attr('src', image4.data('src'));
    image4.removeAttr('data-src');
  });
});