var _0x5e9b=['open','addEventListener','close','getElementById','password','value','37oZvzGa','which','1oROTrl','focus','onkeyup','onclick','classList','167194ZSzLgu','images/logo.svg','877091EkyopO','analytic-editor.html','_self','1843057bhPwJz','display','style','remove','error','block','onsubmit','logo','decision','src','myModal','18542ZTLxsB','parentElement','images/logo-smooth.svg','none','2tuGufG','1584937gySfix','getElementsByClassName','954932hZvgOX','807081oNkFLN'];function _0x52f6(_0x17b111,_0x181403){return _0x52f6=function(_0x5e9bc6,_0x52f6ab){_0x5e9bc6=_0x5e9bc6-0x126;var _0x599488=_0x5e9b[_0x5e9bc6];return _0x599488;},_0x52f6(_0x17b111,_0x181403);}var _0x1f3d36=_0x52f6;(function(_0x3334ec,_0x189e61){var _0x80dd73=_0x52f6;while(!![]){try{var _0x30986e=-parseInt(_0x80dd73(0x148))+parseInt(_0x80dd73(0x141))*-parseInt(_0x80dd73(0x132))+parseInt(_0x80dd73(0x127))+-parseInt(_0x80dd73(0x139))+-parseInt(_0x80dd73(0x14a))*-parseInt(_0x80dd73(0x143))+parseInt(_0x80dd73(0x13a))*parseInt(_0x80dd73(0x136))+-parseInt(_0x80dd73(0x137));if(_0x30986e===_0x189e61)break;else _0x3334ec['push'](_0x3334ec['shift']());}catch(_0x37115b){_0x3334ec['push'](_0x3334ec['shift']());}}}(_0x5e9b,0xe5c89));var logo=document[_0x1f3d36(0x13e)](_0x1f3d36(0x12e));logo[_0x1f3d36(0x13c)]('mouseover',function(){var _0x2b1819=_0x1f3d36;this[_0x2b1819(0x130)]=_0x2b1819(0x134);}),logo[_0x1f3d36(0x13c)]('mouseout',function(){var _0x1303f0=_0x1f3d36;this[_0x1303f0(0x130)]=_0x1303f0(0x149);});var modal=document[_0x1f3d36(0x13e)](_0x1f3d36(0x131)),card=document[_0x1f3d36(0x13e)]('analytic-editor'),span=document[_0x1f3d36(0x138)](_0x1f3d36(0x13d))[0x0];card['onclick']=function(){var _0x4da541=_0x1f3d36;modal[_0x4da541(0x129)][_0x4da541(0x128)]=_0x4da541(0x12c),document['getElementById']('password')[_0x4da541(0x144)]();},span[_0x1f3d36(0x146)]=function(){var _0x21aa5c=_0x1f3d36;modal[_0x21aa5c(0x129)][_0x21aa5c(0x128)]=_0x21aa5c(0x135),document[_0x21aa5c(0x13e)](_0x21aa5c(0x13f))['classList'][_0x21aa5c(0x12a)](_0x21aa5c(0x12b)),document[_0x21aa5c(0x13e)](_0x21aa5c(0x13f))[_0x21aa5c(0x140)]='';},window[_0x1f3d36(0x146)]=function(_0x45a021){var _0x34307d=_0x1f3d36;_0x45a021['target']==modal&&(modal[_0x34307d(0x129)][_0x34307d(0x128)]=_0x34307d(0x135),document[_0x34307d(0x13e)](_0x34307d(0x13f))[_0x34307d(0x147)][_0x34307d(0x12a)](_0x34307d(0x12b)),document[_0x34307d(0x13e)](_0x34307d(0x13f))[_0x34307d(0x140)]='');};var input=document[_0x1f3d36(0x13e)](_0x1f3d36(0x13f));input[_0x1f3d36(0x145)]=function(_0x3b096b){var _0x4313a5=_0x1f3d36;if(_0x3b096b[_0x4313a5(0x142)]==0xd)passwordCheck();},input[_0x1f3d36(0x133)][_0x1f3d36(0x12d)]=function(){return![];};function passwordCheck(){var _0x4af463=_0x1f3d36,_0x419629=document[_0x4af463(0x13e)](_0x4af463(0x13f))[_0x4af463(0x140)];_0x419629==_0x4af463(0x12f)?window[_0x4af463(0x13b)](_0x4af463(0x14b),_0x4af463(0x126)):(input['blur'](),document['getElementById']('password')[_0x4af463(0x140)]='',document[_0x4af463(0x13e)]('password')[_0x4af463(0x147)]['add']('error'));}

// creates div with scrim background and div with the clicked image to zoom in
$('img[zoomable]').addClass('img-enlargeable').click(function() {

    var src = $(this).attr('src');

    var scrim;

    var content;

    // esc key goes back to page
    function removeAll() {
      scrim.remove();
      content.remove();
      document.documentElement.removeAttribute("style");
      $('body').off('keyup.modal-close');
    }

    scrim = $('<div class="scrim">').css({
        display: 'block'
    }).appendTo('body');

    content = $('<div class="content">').css({
        background: 'url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '95%',
        height: '95%',
        position: 'fixed',
        zIndex: '2',
        cursor: 'zoom-out',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }).click(function() {
      removeAll();
    }).appendTo('body');

    document.documentElement.style.overflowY = "hidden";

    // esc key goes back to page
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeAll();
      }
    });
  });