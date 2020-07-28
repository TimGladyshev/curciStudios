/* Petal movement on caption hover*/
var captionText = document.getElementsByClassName('caption')[0];

captionText.addEventListener('mouseover', function (e) {

  var lsp = document.getElementsByClassName('ls')[0];
  var lmp = document.getElementsByClassName('lm')[0];
  var llp = document.getElementsByClassName('ll')[0];
  var rsp = document.getElementsByClassName('rs')[0];
  var rmp = document.getElementsByClassName('rm')[0];
  var rlp = document.getElementsByClassName('rl')[0];
  var rhombus = document.getElementsByClassName('rhombus')[0];

  lsp.classList.add('ls-out');
  lsp.classList.remove('ls');

  lmp.classList.add('lm-out');
  lmp.classList.remove('lm');

  llp.classList.add('ll-out');
  llp.classList.remove('ll');

  rsp.classList.add('rs-out');
  rsp.classList.remove('rs');

  rmp.classList.add('rm-out');
  rmp.classList.remove('rm');

  rlp.classList.add('rl-out');
  rlp.classList.remove('rl');

  rhombus.classList.add('rhombus-out');
  rhombus.classList.remove('rhombus');

}, false);

captionText.addEventListener('mouseout', function () {

  var lsp = document.getElementsByClassName('ls-out')[0];
  var lmp = document.getElementsByClassName('lm-out')[0];
  var llp = document.getElementsByClassName('ll-out')[0];
  var rsp = document.getElementsByClassName('rs-out')[0];
  var rmp = document.getElementsByClassName('rm-out')[0];
  var rlp = document.getElementsByClassName('rl-out')[0];
  var rhombus = document.getElementsByClassName('rhombus-out')[0];

  lsp.classList.add('ls');
  lsp.classList.remove('ls-out');

  lmp.classList.add('lm');
  lmp.classList.remove('lm-out');

  llp.classList.add('ll');
  llp.classList.remove('ll-out');

  rsp.classList.add('rs');
  rsp.classList.remove('rs-out');

  rmp.classList.add('rm');
  rmp.classList.remove('rm-out');

  rlp.classList.add('rl');
  rlp.classList.remove('rl-out');

  rhombus.classList.add('rhombus');
  rhombus.classList.remove('rhombus-out');
}, false);