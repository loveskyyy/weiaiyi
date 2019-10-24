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
/*global $, data */

var data = (function () {
  var
    configMap = {
      // crumb_html - 面包屑导航 HTML 结构
      crumb_html: String()
        + '<div class="crumb">'
        + '<span>'
        + '<a href="#">'
        + '上页'
        + '<span class="crumb-icon"></span>'
        + '</a>'
        + '</span>'
        + '<span>'
        + '<a href="#">'
        + '<span class="crumb-icon"></span>'
        + '当前页面'
        + '<span class="crumb-icon"></span>'
        + '</a>'
        + '</span>'
        + '</div>',
      // title_anli - 干货案例 title
      title_anli: {
        cis1: '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道',
        cis2: '爱情分手被断联，不会这一招，怎么挽回女人？',
        cis3: '爱情没了被拉黑怎么办？教你急速挽回的攻略',
        cis4: '爱情破碎女人绝情离开，坏男人帮你复联挽回爱情！',
        cis5: '被拉黑不知如何复联？学会这两点，完美逆袭挽回爱情！',
        cis6: '被拉黑该如何恢复联系？教你这几步，挽回爱情指日可待！',
        cis7: '女生的“废物测试”其实是对你有意思，你中招了吗？',
        cis8: '不会应对女生的“废物测试”，活该你追不到她',
        cis9: '读懂女生这四种行为，教你分分钟挽回他！',
        cis10: '断联拉黑也不怕，教你学会怎么挽回让女人绝望的感情',
        cis11: '分手后苦苦纠缠被拉黑？快速复联挽回男女生必备！',
        cis12: '夫妻冷战离婚，怎样挽回即将破碎的婚姻？',
        cis13: '感情疲惫、拉黑失联算什么？我照样挽回了她',
        cis14: '合理套路，帮你把握住心仪的她',
        cis15: '坏男人简单一招教你读懂女人，成功挽回爱情',
        cis16: '简直不敢相信，被拉黑的你这样做竟然让她重新爱上你',
        cis17: '警惕婚姻中的几大离婚前兆，解决情感危机',
        cis18: '了解女人的爱情心理，分分钟破解拉黑复联成功，挽回爱情',
        cis19: '坏男人教你：没有追不到的女生，只有不会聊天的愣头青',
        cis20: '男人做好这关键的四点，就能快速挽回她！',
        cis21: '你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？',
        cis22: '你还说你无法挽回爱情？这才是挽回的正确打开方式！',
        cis23: '坏男人教你：女人多绝情，但没有挽回不了的爱情！',
        cis24: '女人说分手拉黑后给你机会，掌握攻略教你复联挽回爱情',
        cis25: '女人说你情商低、沟通差，一招教你快速起死回生，挽回爱情',
        cis26: '普通白领男逆袭法国留学白富美',
        cis27: '情商低被拉黑分手，真实案例教你如何逆袭挽回爱情',
        cis28: '适度断联你都不懂，凭什么想挽回！',
        cis29: '挽回爱情使用错误方法，果断被拉黑失联，学习妙招再次挽救',
        cis30: '挽回攻略：如何跟女朋友复联进行二次吸引恢复爱情？',
        cis31: '做好这关键的四点，就能快速挽回她！',
        cis32: '当你下跪都无法挽回心死女友时，你该试试“幽灵心态”',
        cis33: '百依百顺没有用，读懂女人心你才能挽回你的爱情',
        cis34: '别因误会而分手，挽回爱情，“渣男”的锅你别背',
        cis35: '“没感觉”不可怕，三招教你挽回她',
        cis36: '学会“爱情兵法”，打赢挽回心理攻防战',
        cis37: '提升“恋爱价值感”，女人不会因跪求而回心转意',
        cis38: '表白无果，只用了三十天逆袭',
        cis39: '深陷苦恋，多次表白没有结果，幸亏遇到你',
        cis40: '老公在外找小三，教你见招拆招',
        cis41: '从恩爱夫妻到仇人，都是小三搞得鬼',
        cis42: '被拉黑之后才懂得怎么给她想要的，挽回原来这么简单',
        cis43: '给他合适的爱才是正确的恋爱方法，橘子情感让我重新教会我爱情',
        cis44: '维持好长期婚姻关系，让生活不再磕磕绊绊',
        cis45: '挽回老公的心，让婚姻走出“出轨”阴影',
      },

      // 情感咨询 title
      title_news: {
        new1: '第六届情感导师行业交流指导会',
        new2: '十大杰出诚信企业',
        new3: '市南区区长参观',
        new4: '纪橘子情感行业导师培植计划•上海站',
        new5: '橘子情感 与爱同行——青岛“同行之家”帮扶活动',
        new6: '“暖爱计划”婚恋知识公益讲座报道',
        new7: '正确恋爱观讲座',
        new8: '客户远道而来，送来锦旗向导师团队致谢',
        new9: '社会各界人士交流会',
        new11: '我们是一家人：青木导师、文松导师生日',
        new12: '一个创业者的自述：橘子情感，专注情感，为爱而生',
        new13: '团队理论研发',
        new14: '橘子情感联合青岛大学商学院举办创业就业经验分享讲座',
        new15: '橘子情感联合山东省创业中心举办中俄新兴行业交流会',
        new16: '橘子情感创始人嘉禾参与市南区政协青年创业孵化基地视察活动',
        new17: '橘子创想文化传播公司受邀参加4·26知识产权宣传周主题活动论坛',
        new18: '橘子情感公益活动之《将爱传递每个角落》',
        new19: '橘子情感荣获2017年度教育咨询行业突出贡献奖'
      },
      // 橘子视频
      title_media: {
        'video': '课程预览',
        'inside-video': '内部课程'
      },
      // 导师详情页
      title_mentor: {
        'forum-book': '嘉禾导师十本好书推荐',
        'page1': '沐堇导师',
        'page2': '茉言导师',
        'page3': '屿潇导师',
        'page4': '青木导师',
        'page5': 'Hope导师',
        'page6': '千兰导师',
        'page7': '艺心导师',
        'page8': '嘉禾导师',
        'page11': '白舒导师'
      }
    },
    stateMap = {
      $html: null,
      url: []
    },
    jqueryMap = {},

    setJqueryMap, innerCrumb, loadCrumb, initModule;

  setJqueryMap = function () {
    var $html = stateMap.$html;

    jqueryMap = {
      $html: $html,
      $body: $html.find('body'),
      $w1200: $html.find('.w1200'),
      $child_page: $html.find('.child-page'),
      $crumb: $html.find('.crumb')
    };
  };

  // Start : innerCrumb()
  // 功能  : 向面包屑导航写入当前数据
  // 说明  :
  //   * 该方法接收一个参数 url ，其中保存这浏览器地址的 url 。通过 url 来判读当前页
  //     面的文件名和文件所属的文件夹。通过确定文件夹名及文件名更新面包屑导航的值，并
  //     指定面包屑上一级页面位置。
  // 返回值 : 无
  //
  innerCrumb = function (url) {
    var
      anchor = url.split('/'),
      folder = anchor[anchor.length - 2],
      file = anchor[anchor.length - 1].split('.')[0],
      $crumb = jqueryMap.$body.find('.crumb'), key;

    // 情感问答
    if (folder === 'anli') {
      jqueryMap.$w1200.css({ position: 'relative' });
      $crumb.css({ position: 'absolute', top: '30px', left: '0' });

      switch (folder) {
        case 'anli':
          jqueryMap.$crumb.find('span:first-child a')
            .html('情感问答<span class="crumb-icon"></span>')
            .attr('href', '../emotion-forum.html');
          break;
        default:
          break;
      }
      for (key in configMap.title_anli) {
        jqueryMap.$crumb.find('span:last-child a').html(
          '<span class="crumb-icon"></span>' +
          configMap.title_anli[file] +
          '<span class="crumb-icon"></span>'
        );
      }
    }

    // 新闻咨询
    if (folder === 'news') {
      jqueryMap.$w1200.css({ position: 'relative' });
      $crumb.css({ position: 'absolute', top: '30px', left: '0' });

      switch (folder) {
        case 'news':
          jqueryMap.$crumb.find('span:first-child a')
            .html('新闻咨询<span class="crumb-icon"></span>')
            .attr('href', '../news.html');
          break;
        default:
          break;
      }
      for (key in configMap.title_news) {
        jqueryMap.$crumb.find('span:last-child a').html(
          '<span class="crumb-icon"></span>' +
          configMap.title_news[file] +
          '<span class="crumb-icon"></span>'
        );
      }
    }

    // 橘子视频
    if (folder === 'media') {
      jqueryMap.$w1200.css({ position: 'relative' });
      $crumb.css({ position: 'absolute', top: '220px', left: '360px' });

      switch (folder) {
        case 'media':
          jqueryMap.$crumb.find('span:first-child a')
            .html('橘子视频<span class="crumb-icon"></span>')
            .attr('href', '../course.html');
          break;
        default:
          break;
      }
      for (key in configMap.title_media) {
        jqueryMap.$crumb.find('span:last-child a').html(
          '<span class="crumb-icon"></span>' +
          configMap.title_media[file] +
          '<span class="crumb-icon"></span>'
        );
      }
    }

    //导师详情
    if (folder === 'views') {
      jqueryMap.$w1200.css({ position: 'relative' });
      $crumb.css({ position: 'absolute', top: '1380px', left: '370px' });

      switch (folder) {
        case 'views':
          jqueryMap.$crumb.find('span:first-child a')
            .html('情感导师<span class="crumb-icon"></span>')
            .attr('href', '../focus-team.html');
          break;
        default:
          break;
      }
      for (key in configMap.title_media) {
        jqueryMap.$crumb.find('span:last-child a').html(
          '<span class="crumb-icon"></span>' +
          configMap.title_mentor[file] +
          '<span class="crumb-icon"></span>'
        );
      }
    }
  };
  // End : innerCrumb()

  // Start : loadCrumb()
  // 功能  : 加载面包屑导航结构及样式
  // 说明  :
  //   * 该方法负责将 configMap.crumb_html 写入到页面指定位置。写入 HTML 结构及对应
  //     样式后，调用 innerCrumb() 方法并将浏览器地址 url 作为参数传入。
  // 返回值 : 无
  //
  loadCrumb = function () {
    var url = document.location.href;

    innerCrumb(url);
  };
  // End : loadCrumb()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($html) {
    stateMap.$html = $html;
    $html.find('.w1200').prepend(configMap.crumb_html);
    $html.find('.child-page').prepend(configMap.crumb_html);

    setJqueryMap();
    loadCrumb();
  };
  // End : initModule();

  // 导出公开方法
  return { initModule: initModule };
}());
