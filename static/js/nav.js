var nav = (function () {
  var
    configMap = {
      nav_html : String() +
        '<li>' +
          '<a href="index.html">橘子首页</a>' +
        '</li>' +
        '<li>' +
          '<a href="save-love.html">挽回爱情</a>' +
        '</li>' +
        '<li>' +
          '<a href="save-marriage.html">挽救婚姻</a>' +
        '</li>' +
        '<!-- <li>' +
          '<a href="separate-mistress.html">分离小三</a>' +
        '</li> -->' +
        // '<li>' +
        //   '<a href="custom-love.html">定制爱情</a>' +
        // '</li>' +
        // '<li>' +
        //   '<a href="emotion-forum.html">情感论坛</a>' +
        // '</li>' +
        '<li>' +
          '<a href="focus-team.html">导师团队</a>' +
        '</li>' +
        '<li>' +
          '<a href="course.html">服务介绍</a>' +
        '</li>' +

        '<li class="no">' +
          '<a href="about-us.html">关于我们</a>' +
        '</li>'
    },
    stateMap = { $nav : null },
    jqueryMap = {},

    setJqueryMap, parseUrl, loadPage, initModule
  ;

  setJqueryMap = function () {
    var $nav = stateMap.$nav;
    jqueryMap = { $nav : $nav };
  };

  parseUrl = function () {
    var href = window.location.href;

    href = href.split('/');
    href = href[href.length - 1].split('.')[0];

    switch (href) {
      case 'index':
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(1)')
          .css({ background : '#fd3232' });
        break;
      case 'save-love' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(2)')
          .css({ background : '#fd3232' });
        break;
      case 'save-marriage' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(3)')
          .css({ background : '#fd3232' });
        break;
      case 'custom-love' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(4)')
          .css({ background : '#fd3232' });
        break;
      case 'emotion-forum' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(5)')
          .css({ background : '#fd3232' });
        break;
      case 'focus-team' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(6)')
          .css({ background : '#fd3232' });
        break;
      case 'course' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(7)')
          .css({ background : '#fd3232' });
        break;
      case 'about-us' :
        jqueryMap.$nav.find('.inner ul.nav-block li:nth-child(8)')
          .css({ background : '#fd3232' });
        break;
      default:
        break;
    }

  };

  loadPage = function () {
    var
      href = window.location.href,
      href = href.split('/'),
      setUrl
    ;

    setUrl = function () {
      $('.nav .nav-block li:nth-child(1)').find('a')
        .attr('href', '../index.html');
      $('.nav .nav-block li:nth-child(2)').find('a')
        .attr('href', '../save-love.html');
      $('.nav .nav-block li:nth-child(3)').find('a')
        .attr('href', '../save-marriage.html');
      $('.nav .nav-block li:nth-child(4)').find('a')
        .attr('href', '../custom-love.html');
      $('.nav .nav-block li:nth-child(5)').find('a')
        .attr('href', '../emotion-forum.html');
      $('.nav .nav-block li:nth-child(6)').find('a')
        .attr('href', '../focus-team.html');
      $('.nav .nav-block li:nth-child(7)').find('a')
        .attr('href', '../course.html');
      $('.nav .nav-block li:nth-child(8)').find('a')
        .attr('href', '../about-us.html');
    };

    if ( href[href.length - 2] === 'views' ||
         href[href.length - 2] === 'anli'  ||
         href[href.length - 2] === 'media' ||
         href[href.length - 2] === 'news'
    ) {
      setUrl();
    }

  };

  initModule = function ($nav) {
    stateMap.$nav = $nav;
    setJqueryMap();

    $nav.find('ul.nav-block').html(configMap.nav_html);

    parseUrl();
    loadPage();
  };

  return { initModule : initModule }
}());
