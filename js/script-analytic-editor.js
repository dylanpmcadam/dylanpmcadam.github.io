var _0x5960=['close2','value','govini-design-system','getElementById','onkeyup','75MdfKBa','logo','726926ZKrOTy','classList','password2','onclick','690784LPbYOy','open','remove','parentElement','825926GPcqdW','style','myModal2','4414gxIMwF','decision','2330102NHiaqz','src','govini-design-system.html','71629CoCIrF','mouseover','11ctXERJ','error','which','169511BsHGjJ','1pGaaft','block','_self','1uGEkCH','display'];var _0x3d5920=_0x18f1;(function(_0x3b8f40,_0x118f83){var _0x4d524d=_0x18f1;while(!![]){try{var _0x1b62be=parseInt(_0x4d524d(0xa0))*parseInt(_0x4d524d(0x9e))+parseInt(_0x4d524d(0x96))+parseInt(_0x4d524d(0xb0))+parseInt(_0x4d524d(0x92))+parseInt(_0x4d524d(0xa4))*parseInt(_0x4d524d(0xa3))+parseInt(_0x4d524d(0xae))*-parseInt(_0x4d524d(0x99))+-parseInt(_0x4d524d(0xa7))*parseInt(_0x4d524d(0x9b));if(_0x1b62be===_0x118f83)break;else _0x3b8f40['push'](_0x3b8f40['shift']());}catch(_0x5119a6){_0x3b8f40['push'](_0x3b8f40['shift']());}}}(_0x5960,0x83d0a));var logo=document['getElementById'](_0x3d5920(0xaf));logo['addEventListener'](_0x3d5920(0x9f),function(){var _0xdd96d1=_0x3d5920;this[_0xdd96d1(0x9c)]='images/logo-smooth.svg';}),logo['addEventListener']('mouseout',function(){var _0x5aa2b9=_0x3d5920;this[_0x5aa2b9(0x9c)]='images/logo.svg';});function _0x18f1(_0x266af7,_0x13783c){return _0x18f1=function(_0x5960e3,_0x18f104){_0x5960e3=_0x5960e3-0x91;var _0x297fcc=_0x5960[_0x5960e3];return _0x297fcc;},_0x18f1(_0x266af7,_0x13783c);}var modal2=document[_0x3d5920(0xac)](_0x3d5920(0x98)),card2=document[_0x3d5920(0xac)](_0x3d5920(0xab)),span2=document['getElementsByClassName'](_0x3d5920(0xa9))[0x0];card2['onclick']=function(){var _0x2cdf5f=_0x3d5920;modal2['style'][_0x2cdf5f(0xa8)]=_0x2cdf5f(0xa5),document[_0x2cdf5f(0xac)](_0x2cdf5f(0xb2))['focus']();},span2['onclick']=function(){var _0x2eac97=_0x3d5920;modal2[_0x2eac97(0x97)]['display']='none',document[_0x2eac97(0xac)]('password2')[_0x2eac97(0xb1)][_0x2eac97(0x94)](_0x2eac97(0xa1)),document[_0x2eac97(0xac)](_0x2eac97(0xb2))['value']='';},window[_0x3d5920(0x91)]=function(_0x21e64b){var _0x3cb048=_0x3d5920;_0x21e64b['target']==modal2&&(modal2['style']['display']='none',document[_0x3cb048(0xac)]('password2')[_0x3cb048(0xb1)]['remove']('error'),document[_0x3cb048(0xac)](_0x3cb048(0xb2))[_0x3cb048(0xaa)]='');};var input2=document[_0x3d5920(0xac)](_0x3d5920(0xb2));input2[_0x3d5920(0xad)]=function(_0x31de48){var _0x24b443=_0x3d5920;if(_0x31de48[_0x24b443(0xa2)]==0xd)passwordCheck2();},input2[_0x3d5920(0x95)]['onsubmit']=function(){return![];};function passwordCheck2(){var _0x24c13a=_0x3d5920,_0x23021c=document['getElementById']('password2')[_0x24c13a(0xaa)];_0x23021c==_0x24c13a(0x9a)?window[_0x24c13a(0x93)](_0x24c13a(0x9d),_0x24c13a(0xa6)):(input2['blur'](),document[_0x24c13a(0xac)](_0x24c13a(0xb2))[_0x24c13a(0xaa)]='',document[_0x24c13a(0xac)](_0x24c13a(0xb2))[_0x24c13a(0xb1)]['add'](_0x24c13a(0xa1)));}

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