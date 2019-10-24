/*
 * header.js
 * Header namespace module
 * 页面 header 区域 javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, header */

var header = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="inner">'
          + '<div class="pull-left">'
            + '<img src="img/index/logo-word.jpg" alt="橘子情感--logo" class="img-responsive">'
          + '</div>'
          + '<div class="pull-right">'
            + '<div class="icon">'
              + '<div class="qrcode-wechat">'
                + '<img src="img/index/icon-app-red.png" alt="橘子情感--微信二维码">'
              + '</div>'
              + '<div class="num-phone">'
                + '<img src="img/index/icon-phone-red.jpg" alt="橘子情感--热线电话">'
              + '</div>'
            + '</div>'
            + '<div class="txt">'
              + '<p class="txtapp">橘子情感官方App</p>'
              + '<p>免费情感热线电话</p>'
              + '<p>4006-299-520</p>'
            + '</div>'
          + '</div>'
          + '<div class="wechat">'
            + '<img src="img/index/app-pc.png" alt="橘子情感--官方App">'
          + '</div>'
        + '</div>'
    },
    stateMap = { $header : null },
    jqueryMap = {},

    setJqueryMap, updateImg, toggleWechat, initModule;

  setJqueryMap = function () {
    var $header = stateMap.$header;

    jqueryMap = {
      $header : $header,
      $qrcode : $header.find('.qrcode-wechat img'),
      $wechat : $header.find('.wechat'),
      $p　　　: $header.find('.txtapp')
    };
  };

  // Start : updateImg()
  // 功能  : 动态更新 header 图标
  //
  updateImg = function () {
    var
      changeImg,
      url = window.location.href;

    url = url.split('/');

    changeImg = function () {
      $('header .pull-left img').attr('src', '../img/index/logo-word.jpg');

      $('header .pull-right .icon .qrcode-wechat img')
        .attr('src', '../img/index/icon-app-red.png');

      $('header .pull-right .icon .num-phone img')
        .attr('src', '../img/index/icon-phone-red.jpg');

      $('header .wechat img')
        .attr('src', '../img/index/erwei.jpg');
    };

    // 当为子页面时，更新图标
    switch (url[url.length - 2]) {
      case 'views' :
        changeImg();
        break;
      case 'media' :
        changeImg();
        break;
      case 'news' :
      changeImg();
        break;
      case 'anli' :
        changeImg();
        break;
      default:
        break;
    }
  };
  // End : updateImg()

  // Start : toggleWechat()
  // 功能 : 显示和隐藏 header 区域微信二维码图片
  // 说明 :
  //   * 当鼠标移入 ‘官方二维码’ 处的图标时，显示二维码；当鼠标移出时，隐藏二维码。
  //
  toggleWechat = function () {
    jqueryMap.$qrcode.mouseover(function () {
      jqueryMap.$wechat.toggle();
    });
    jqueryMap.$qrcode.mouseleave(function () {
      jqueryMap.$wechat.toggle();
    });
    jqueryMap.$p.mouseover(function () {
      jqueryMap.$wechat.toggle();
    });
    jqueryMap.$p.mouseleave(function () {
      jqueryMap.$wechat.toggle();
    });
  };
  // End : toggleWechat()

  initModule = function ($header) {
    stateMap.$header = $header;
    $header.html(configMap.main_html);

    setJqueryMap();
    updateImg();
    toggleWechat();
  };

  return { initModule : initModule };
}());
