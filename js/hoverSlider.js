function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

Array.from(document.getElementsByClassName("carousel-item")).forEach(
    function (element, index, array) {
      element.addEventListener('mouseover', function (e) {
        if (!element.classList.contains('cim')) {
          var row = element.parentNode.parentNode.parentNode.parentNode;
          var blurbText = row.querySelector('.blurbText');
          var slideInfo = element.querySelector(".overlayContent");
          var clone = slideInfo.cloneNode(true);
          blurbText.innerHTML = '';
          clone.style.display = "block";
          var width = row.querySelector('.blurbContainer').clientWidth;
          width = width * .7;
          clone.style.width = width + 'px';
          blurbText.appendChild(clone);
          var overlay = blurbText.parentNode;
          if (row.classList.contains('right')) {
            overlay.classList.add('blurbOverlayLeftOut');
            overlay.classList.remove('blurbOverlayLeft');
          } else {
            overlay.classList.add('blurbOverlayRightOut');
            overlay.classList.remove('blurbOverlayRight');
          }
        }
        var button = element.querySelector('.overlayButton');
        if (button) {
          button.classList.add('overlayButtonOut');
          button.classList.remove('overlayButton');
        }
        var button2 = element.querySelector('.overlayButton2');
        if (button2) {
          button.style.left = '45%';
          button2.classList.add('overlayButton2Out');
          button2.classList.remove('overlayButton2');
        }
        var buttonModal = element.querySelector('.overlayButtonModal');
        if (buttonModal) {
          buttonModal.classList.add('overlayButtonModalOut');
          buttonModal.classList.remove('overlayButtonModal');
        }

      }, false);
      element.addEventListener('mouseout', function () {
        if (!element.classList.contains('cim')) {
          var row = element.parentNode.parentNode.parentNode.parentNode;
          if (row.classList.contains('right')) {
            var overlayL = row.querySelector('.blurbOverlayLeftOut');
            overlayL.classList.add('blurbOverlayLeft');
            overlayL.classList.remove('blurbOverlayLeftOut');
          } else {
            var overlayR = row.querySelector('.blurbOverlayRightOut');
            overlayR.classList.add('blurbOverlayRight');
            overlayR.classList.remove('blurbOverlayRightOut');
          }
        }
        var button = element.querySelector('.overlayButtonOut');
        if (button) {
          button.classList.add('overlayButton');
          button.classList.remove('overlayButtonOut');
        }
        var button2 = element.querySelector('.overlayButton2Out');
        if (button2) {
          button2.classList.add('overlayButton2');
          button2.classList.remove('overlayButton2Out');
        }
        var buttonModal = element.querySelector('.overlayButtonModalOut');
        if (buttonModal) {
          buttonModal.classList.add('overlayButtonModal');
          buttonModal.classList.remove('overlayButtonModalOut');
        }
      }, false);
    });