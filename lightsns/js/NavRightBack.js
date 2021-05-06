/**
 * 右划返回 JavaScript BY@浅小沫
 * Date 2021-05-06
 */

// 判断EventUtil是否存在
if(typeof EventUtil == 'undefined') {
 document.write("<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/Truimo/static@1.45/vendor/EventUtil/index.min.js'></script>");
}

// 右划返回
NavRightBack = function(){
  // body
  var Body = document.getElementsByTagName("body")[0];
  // nav返回
  var NavBack = function(){
    if($('.navbar-on-center').find('.back').length != 0) {
      $('.navbar-on-center').find('.back').click();
    }
  }
  EventUtil.bindEvent(Body, 'swiperight', NavBack);
}
// run
window.onload = function(){
  NavRightBack();
}
