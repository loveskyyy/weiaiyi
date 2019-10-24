/*
 * sitemap.js
 * Sitemap namespace module
 * 百度站长平台链接自动推送
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, data */


// http://ziyuan.baidu.com/linksubmit/index?site=http://www.jvziqinggan.com/

var sitemap = (function () {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
     bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
     bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
}());
