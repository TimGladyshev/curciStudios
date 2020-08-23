$(window).on("scroll", function () {
  var curPos = $(window).scrollTop();

  $('.nBar .compressible .dDown .NB-nav-link').each(function () {
    var link = $(this);
    var nBarHeight = $('.nBar').outerHeight() + 1;
    var linkSection = $(link.attr('href'));

    if (linkSection.position().top - nBarHeight <= curPos && link.offset().top + linkSection.height() > curPos) {
      $('.nBar .compressible .dDown').removeClass('activeBar');
      link.parent().addClass('activeBar');
    } else {
      link.parent().removeClass('activeBar');
    }
  });
});

function openHamb() {
  document.getElementById('hambOverlay').style.width = '100%';
}

function closeHamb() {
  document.getElementById('hambOverlay').style.width = '0%';
}

