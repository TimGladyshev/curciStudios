$(function() {
  $('.carousel.lazy-load').bind('slide.bs.carousel', function (e) {
    var image = $(e.relatedTarget).find('figure.o img[data-src]');
    image.prop('src', image.data('src'));
    image.removeProp('data-src');

    var image2 = $(e.relatedTarget).find('figure.t img[data-src]');
    image2.prop('src', image2.data('src'));
    image2.removeProp('data-src');

    var image3 = $(e.relatedTarget).find('figure.th img[data-src]');
    image3.prop('src', image3.data('src'));
    image3.removeProp('data-src');

    var image4 = $(e.relatedTarget).find('figure.f img[data-src]');
    image4.prop('src', image4.data('src'));
    image4.removeProp('data-src');
  });
});