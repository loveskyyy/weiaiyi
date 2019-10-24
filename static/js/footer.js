/*
 * data.js
 * Data namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, footer*/

var footer = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="inner">'
          + '<div class="triangle">'
            + '<div class="triangle-outer"></div>'
            + '<div class="triangle-inner"></div>'
          + '</div>'
          + '<div class="main">'
            + '<div class="footer-logo left"></div>'
            + '<div class="txt mid">'
              + '<div class="footer-top">'
                + '<span class="icon phone footer-mid-left">'
                  + '<img src="img/index/icon-phone-red.png" alt="橘子情感--热线电话">'
                + '</span>'
                + '<span class="txt footer-mid-right">'
                  + '<p class="phone-txt">橘子情感热线</p>'
                  + '<p class="phone-num">4006-299-520</p>'
                + '</span>'
              + '</div>'
              + '<div class="bot">'
                + '<div class="left pull-left">'
                  + '<p>橘子微信公众平台：<span class="wechat-num">juziqinggan</span></p>'
                  + '<p>青岛橘子创想文化传播有限公司</p>'
                + '</div>'
                + '<div class="right pull-right">'
                  + '<p>公司地址：<span class="address">青岛市市南区银川西路 67 号动漫产业园</span></p>'
                  + '<p>备案号：<span class="record-num">鲁 ICP 备 17023741 号</span></p>'
                + '</div>'
              + '</div>'
            + '</div>'
            + '<div class="icon qrcode text-center">'
              + '<div class="qrcode right"></div>'
              + '<span class="txt">扫一扫关注我们</span>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $footer : null },
    jqueryMap = {},

    setJqueryMap, updateImg, initModule;

  setJqueryMap = function () {
    var $footer = stateMap.$footer;

    jqueryMap = {
      $footer : $footer
    };
  };

  updateImg = function () {
    var url = window.location.href;

    url = url.split('/');

    // 当为子页面时，更新图标
    switch (url[url.length - 2]) {
      case 'views' :
        $('footer .icon.phone img').attr('src', '../img/index/icon-phone-red.png');
        break;
      case 'media' :
        $('footer .icon.phone img').attr('src', '../img/index/icon-phone-red.png');
        break;
      case 'news' :
        $('footer .icon.phone img').attr('src', '../img/index/icon-phone-red.png');
        break;
      case 'anli' :
        $('footer .icon.phone img').attr('src', '../img/index/icon-phone-red.png');
        break;
      default:
        break;
    }
  };

  initModule = function ($footer) {
    stateMap.$footer = $footer;
    $footer.html(configMap.main_html);

    setJqueryMap();
    updateImg();
  };

  return { initModule : initModule };
}());
