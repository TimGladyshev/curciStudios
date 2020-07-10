let captionText = document.getElementsByClassName('caption')[0];

captionText.addEventListener('mouseover', function (e) {

  let lsp = document.getElementsByClassName('ls')[0];
  let lmp = document.getElementsByClassName('lm')[0];
  let llp = document.getElementsByClassName('ll')[0];
  let rsp = document.getElementsByClassName('rs')[0];
  let rmp = document.getElementsByClassName('rm')[0];
  let rlp = document.getElementsByClassName('rl')[0];

  console.log(lsp);

  lsp.classList.remove('ls');
  lsp.classList.add('ls-out');

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

}, false);

captionText.addEventListener('mouseout', function () {

  let lsp = document.getElementsByClassName('ls-out')[0];
  let lmp = document.getElementsByClassName('lm-out')[0];
  let llp = document.getElementsByClassName('ll-out')[0];
  let rsp = document.getElementsByClassName('rs-out')[0];
  let rmp = document.getElementsByClassName('rm-out')[0];
  let rlp = document.getElementsByClassName('rl-out')[0];

  lsp.classList.remove('ls-out');
  lsp.classList.add('ls');

  lmp.classList.remove('lm-out');
  lmp.classList.add('lm');

  llp.classList.remove('ll-out');
  llp.classList.add('ll');

  rsp.classList.remove('rs-out');
  rsp.classList.add('rs');

  rmp.classList.remove('rm-out');
  rmp.classList.add('rm');

  rlp.classList.remove('rl-out');
  rlp.classList.add('rl');
}, false);