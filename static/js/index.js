$(document).ready(function() {
    // 元素到可视区域时再显示
	(function () {
    function lazyLoad() {
      /**
       * Created by smpower on 2017/8/3.
       * email: bzsjxhywrf@outlook.com
       * GitHub: https://github.com/smpower/
       */

      // 显示微信二维码
      // function qrcodeWechat() {
      //     // 淡入
      //     function wechatFadeIn() {
      //         $(".wechat").fadeIn(300);
      //     }
      //     // 淡出
      //     function wechatFadeOut() {
      //         $(".wechat").fadeOut(300);
      //     }
      //     // 划过图标显示
      //     $(".qrcode-wechat img").mouseover(function () {
      //         wechatFadeIn();
      //     });
      //     $(".qrcode-wechat img").mouseout(function () {
      //         wechatFadeOut();
      //     });
      //     // 划过文字显示
      //     $(".pull-right .txt p:first-child").mouseover(function () {
      //         wechatFadeIn();
      //     });
      //     $(".pull-right .txt p:first-child").mouseout(function () {
      //         wechatFadeOut();
      //     });
      // }
      // qrcodeWechat();


      // 获取当前文档高度
      var documentHeight = $(document).height();
      // 获取当前屏幕高度
      var windowHeight = $(window).height();
      // 获取第七个模块距离屏幕顶端的高度
      var moduleSevenOffsetTop = $(".module-07 .main").offset().top;
      console.log(moduleSevenOffsetTop);

      $(window).scroll(function () {
        // 获取滚动条滚动的距离
        var scrollTop = $(window).scrollTop();
        // console.log(scrollTop);

        if (scrollTop > (moduleSevenOffsetTop - windowHeight/3)) {
          // alert("ok");
          $(".module-07 .main .top").animate({
            left: "13.5%",
            opacity: "1"
          }, 1000);
          $(".module-07 .main .bot").animate({
            left: "0",
            opacity: "1"
          }, 1000);
        }
      });
    }
    lazyLoad();
  })();

  $(".li21").mouseover(function() {
		$(".li11").css({
			"border": "2px slide #FFFFFF",
			"box-shadow": "0 5px 10px #FFFFFF",
		});
	});
	$(".li22").mouseover(function() {
		$(".li12").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li23").mouseover(function() {
		$(".li13").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li24").mouseover(function() {
		$(".li14").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".back").mouseout(function() {
		$(".li11").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li12").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li13").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li14").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li11").mouseover(function() {
		$(".li11").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li12").mouseover(function() {
		$(".li12").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li13").mouseover(function() {
		$(".li13").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li14").mouseover(function() {
		$(".li14").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li11").mouseout(function() {
		$(".li11").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li12").mouseout(function() {
		$(".li12").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li13").mouseout(function() {
		$(".li13").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li14").mouseout(function() {
		$(".li14").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
});


$(document).ready(function() {

	// 获取当前文档高度
	var documentHeight = $(document).height();
	// 获取当前屏幕高度
	var windowHeight = $(window).height();
	// 获取为什么失去爱情模块距离屏幕顶端的高度
	var moduleSevenOffsetTop1 = $(".wailian-ul").offset().top;
	//获取橘子总结的经验模块距离屏幕顶端的高度
	var moduleSevenOffsetTop2 = $(".body3-ul").offset().top;
	//获取橘子总结底部的经验模块距离屏幕顶端的高度
	var moduleSevenOffsetTop3 = $(".body4-wen").offset().top;
	//获取给您的保障模块距离屏幕顶端的高度
	var moduleSevenOffsetTop4 = $(".txt-list").offset().top;

	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop1 = $(window).scrollTop();

		//高级方案模块
		if(scrollTop1 > (moduleSevenOffsetTop1 - windowHeight + 500)) {
			// alert("ok");
			$(".ma-left1").animate({
				left: "100px",
				opacity: "1"
			}, 1000);
		}

	});
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop2 = $(window).scrollTop();

		//高级方案模块
		if(scrollTop2 > (moduleSevenOffsetTop2 - windowHeight + 500)) {
			// alert("ok");
			$(".body3-ul1").animate({
				left: "0%",
				opacity: "1"
			}, 1000);
			$(".body3-ul2").animate({
				right: "0%",
				opacity: "1"
			}, 1000);
		}
	});
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop3 = $(window).scrollTop();

		//高级方案模块
		if(scrollTop3 > (moduleSevenOffsetTop3 - windowHeight + 500)) {
			// alert("ok");
			$(".body4-wen-li1").animate({
				bottom: "-100px",
				opacity: "1"
			}, 1500);
			$(".body4-wen-li2").animate({
				bottom: "-100px",
				opacity: "1"
			}, 1000);
			$(".body4-wen-li3").animate({
				bottom: "-100px",
				opacity: "1"
			}, 1500);
		}
	});
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop4 = $(window).scrollTop();

		//高级方案模块
		if(scrollTop4 > (moduleSevenOffsetTop4 - windowHeight + 500)) {
			$(".txt-list-div1").animate({
				right: "12%",
				opacity: "1"
			}, 1000);
			$(".txt-list-div2").animate({
				right: "14%",
				opacity: "1"
			}, 1500);
			$(".txt-list-div3").animate({
				right: "15%",
				opacity: "1"
			}, 2000);
		}
	});




});
$(document).ready(function(){
	//客户感言
	$('.service-guarantee .module .right .bottom .right ul li:nth-child(1)').click(function(){
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(2)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(1)').addClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(3)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(4)').removeClass('active');
	});
	$('.service-guarantee .module .right .bottom .right ul li:nth-child(2)').click(function(){
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(1)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(2)').addClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(3)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(4)').removeClass('active');
	});
	$('.service-guarantee .module .right .bottom .right ul li:nth-child(3)').click(function(){
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(1)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(3)').addClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(2)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(4)').removeClass('active');
	});
	$('.service-guarantee .module .right .bottom .right ul li:nth-child(4)').click(function(){
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(1)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(4)').addClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(3)').removeClass('active');
		$('.service-guarantee .module .right .bottom .left .top .kehu:nth-child(2)').removeClass('active');
	});
});
