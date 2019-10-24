/*
 * 发展历程
 */

$(document).ready(function () {
	$(".rli1").css("display", "block");
	$(".rli2").css("display", "none");
	$(".rli3").css("display", "none");
	$(".rli4").css("display", "none");
	$(".rli5").css("display", "none");
	$(".rli6").css("display", "none");
	$(".body1 .left ul li").css({
		"color": "#fff"
	});
	$(".lli1").css("color", "#FF3232");
	$(".lli1").mouseover(function () {
		$(".rli1").css("display", "block");
		$(".rli2").css("display", "none");
		$(".rli3").css("display", "none");
		$(".rli4").css("display", "none");
		$(".rli5").css("display", "none");
		$(".rli6").css("display", "none");
		$(".lli1").css("color", "#FF3232");
		$(".lli2").css("color", "#F0F0F0");
		$(".lli3").css("color", "#F0F0F0");
		$(".lli4").css("color", "#F0F0F0");
		$(".lli5").css("color", "#F0F0F0");
		$(".lli6").css("color", "#F0F0F0");
	});
	$(".lli2").mouseover(function () {
		$(".rli2").css("display", "block");
		$(".rli1").css("display", "none");
		$(".rli3").css("display", "none");
		$(".rli4").css("display", "none");
		$(".rli5").css("display", "none");
		$(".rli6").css("display", "none");
		$(".lli1").css("color", "#F0F0F0");
		$(".lli2").css("color", "#FF3232");
		$(".lli3").css("color", "#F0F0F0");
		$(".lli4").css("color", "#F0F0F0");
		$(".lli5").css("color", "#F0F0F0");
		$(".lli6").css("color", "#F0F0F0");
	});
	$(".lli3").mouseover(function () {
		$(".rli3").css("display", "block");
		$(".rli2").css("display", "none");
		$(".rli1").css("display", "none");
		$(".rli4").css("display", "none");
		$(".rli5").css("display", "none");
		$(".rli6").css("display", "none");
		$(".lli1").css("color", "#F0F0F0");
		$(".lli2").css("color", "#F0F0F0");
		$(".lli3").css("color", "#FF3232");
		$(".lli4").css("color", "#F0F0F0");
		$(".lli5").css("color", "#F0F0F0");
		$(".lli6").css("color", "#F0F0F0");
	});
	$(".lli4").mouseover(function () {
		$(".rli4").css("display", "block");
		$(".rli2").css("display", "none");
		$(".rli3").css("display", "none");
		$(".rli1").css("display", "none");
		$(".rli5").css("display", "none");
		$(".rli6").css("display", "none");
		$(".lli1").css("color", "#F0F0F0");
		$(".lli2").css("color", "#F0F0F0");
		$(".lli3").css("color", "#F0F0F0");
		$(".lli4").css("color", "#FF3232");
		$(".lli5").css("color", "#F0F0F0");
		$(".lli6").css("color", "#F0F0F0");
	});
	$(".lli5").mouseover(function () {
		$(".rli5").css("display", "block");
		$(".rli2").css("display", "none");
		$(".rli3").css("display", "none");
		$(".rli4").css("display", "none");
		$(".rli1").css("display", "none");
		$(".rli6").css("display", "none");
		$(".lli1").css("color", "#F0F0F0");
		$(".lli2").css("color", "#F0F0F0");
		$(".lli3").css("color", "#F0F0F0");
		$(".lli4").css("color", "#F0F0F0");
		$(".lli5").css("color", "#FF3232");
		$(".lli6").css("color", "#F0F0F0");
	});
	$(".lli6").mouseover(function () {
		$(".rli6").css("display", "block");
		$(".rli2").css("display", "none");
		$(".rli3").css("display", "none");
		$(".rli4").css("display", "none");
		$(".rli5").css("display", "none");
		$(".rli1").css("display", "none");
		$(".lli1").css("color", "#F0F0F0");
		$(".lli2").css("color", "#F0F0F0");
		$(".lli3").css("color", "#F0F0F0");
		$(".lli4").css("color", "#F0F0F0");
		$(".lli5").css("color", "#F0F0F0");
		$(".lli6").css("color", "#FF3232");
	});
});


/*
* created by smpower
* email: bzsjxhywrf@outlook.com
* github: https://github.com/smpower/
* */

/* 模块三：橘子环境 */
function moduleThree() {
	/* 轮播图 */
	var moduleThreeBanner = new Swiper(".swiper-container", {
		autoplay: 3000,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		loop: true,
	});
}
moduleThree();
/* /模块三：橘子环境 */


/* 模块六：服务步骤 */
function moduleSix() {

	var moduleSixTopItem = $(".module-06 .main .top .main-inner .item");

	function changeIcons() {
		moduleSixTopItem.children("div.icon").mouseover(function (event) {
			$(this).animate({
				"backgroundPositionY": "-142px"
			}, 300);
		});
		moduleSixTopItem.children("div.icon").mouseleave(function () {
			$(this).animate({
				"backgroundPositionY": "0"
			}, 300);
		});
	}
	changeIcons();


	var item = $(".module-06 .main .bot .main-inner .item");

	//--> 获取‘立刻咨询’按钮
	var askBtn = $(".button_base div");
	//--> 点击‘立刻咨询’按钮打开‘导师团队’页面
	askBtn.click(function () {
		window.open("./focus-team.html");
	});

}
moduleSix();
/* /模块六：服务步骤 */
