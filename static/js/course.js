/*
 * created by smpower
 * email: bzsjxhywrf@outlook.com
 * github: https://github.com/smpower/
 * */

//////////////////////////////////////////// -- 工  具  库 -- //////////////////////////////////////////////

//////////////////////////////////////// -- 圆  环  进  度  条 -- ///////////////////////////////////////////
// 1. cvs - 画布的 id 名 【必填参数】
// 2. cvsSize - 确定画布的宽度 【必填参数】（只支持宽高相等的画布）
// 3. target - 圆环进度条占圆环的比率 【必填参数】
// 4. strokeStyle - 圆环的颜色 【必填参数 - 确定圆环的背景颜色】
// 5. circleStrokeStyle - 圆环进度条的颜色 【必填参数 - 确定圆环进度条的颜色】
// 6. floaNum - 圆环中间显示的文本（百分比）【可选参数 - 默认保留小数点后 2 位小数】
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var Progress = function() {};

Progress.prototype = {
	circle: function(cvs, cvsSize, target, strokeStyle, circleStrokeStyle, floatNum) {

		this.circle.strokeStyle = strokeStyle || "#87cebb";
		this.circle.circleStrokeStyle = circleStrokeStyle || "purple";
		this.circle.floatNum = floatNum || 0;

		// 1. 获取画布对象
		var ctx = cvs.getContext("2d");

		// 2. 确定圆环的参数
		var w = cvs.width = cvsSize; // 确定画布的宽度
		var h = cvs.height = w; // 确定画布的高度

		ctx.lineWidth = cvs.width / 10 || cvs.height / 10; // 确定圆环的宽度

		var x = w / 2; // 确定圆环 x 轴的坐标
		var y = h / 2; // 确定圆环 y 轴的坐标

		var r = Math.min(w, h) / 2 - ctx.lineWidth / 2; // 确定圆环的半径

		var target = target; // 目标进度
		var total = 100; // 完成目标进度需要的总过程
		var progress = 0; // 完成目标进度需要的过程

		// 3. 绘制进度条
		this.circle.draw = function() {

			if(progress > total) return false;

			ctx.clearRect(0, 0, w, h); // 清空画布

			// 3.1 绘制背景进度条
			this.outerCircle = function() {
				ctx.beginPath(); // 开始绘制圆环路径
				ctx.strokeStyle = strokeStyle; // 填充圆面颜色
				ctx.arc(x, y, r, 0, Math.PI * 2); // 绘制圆环
				ctx.stroke(); // 描边
				ctx.closePath(); // 结束路径
			};
			this.outerCircle();

			// 3.2 绘制活动进度条
			this.innerCircle = function() {
				var percent = target * progress / total; // 活动进度条完成的比率
				var start = Math.PI * 3 / 2 * progress / total;
				var end = Math.PI * 2 * percent + start;
				ctx.beginPath(); // 开始绘制圆环路径
				ctx.strokeStyle = circleStrokeStyle; // 为活动进度条填充颜色
				ctx.arc(x, y, r, start, end); // 绘制 1/4 进度条
				ctx.lineCap = "butt"; // 设置进度条两端为圆弧形样式
				ctx.stroke(); // 描边
				ctx.closePath(); // 结束路径
			};
			this.innerCircle();

			// 3.3 绘制文本
			this.innerText = function() {
				var percent = target * progress / total; // 活动进度条完成的比率
				var p = (percent * 100).toFixed(floatNum) + "%"; // 显示的文本 - 完成比率
				ctx.textAlign = "center"; // 使绘制的文本水平居中
				ctx.textBaseline = "middle"; // 使绘制的文本垂直居中
				ctx.fillStyle = "orange"; // 设置文本的颜色
				ctx.font = w / 8 + "px" + "'Microsoft YaHei'"; // 设置文本的大小和字体
				ctx.fillText(p, x, y); // 绘制文本
			};
			this.innerText();

			progress++;

		};

        // 4.设置定时器
        setInterval(this.circle.draw, 13);

	},

	bar: function() {
		// body...
	}
};




//服务步骤js

$(document).ready(function() {
	// 获取当前文档高度
	var documentHeight = $(document).height();
	// 获取当前屏幕高度
	var windowHeight = $(window).height();
	// 获取当前屏幕宽度
	var windowWidth = $(window).width();
	// 获取服务步骤模块距离屏幕顶端的高度
	var moduleSevenOffsetTop = $(".body7 ul").offset().top;
	//获取橘子高级方案模块距离屏幕顶端的高度
	var moduleSevenOffsetTop1 = $(".body1-ul").offset().top;
	//获取橘子总结的经验模块距离屏幕顶端的高度
	var moduleSevenOffsetTop2 = $(".body3-ul").offset().top;
	//获取橘子总结底部的经验模块距离屏幕顶端的高度
	var moduleSevenOffsetTop3 = $(".body4-wen").offset().top;
	//获取给您的保障模块距离屏幕顶端的高度
	var moduleSevenOffsetTop4 = $(".txt-list").offset().top;
//	console.log(moduleSevenOffsetTop);
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop = $(window).scrollTop();
//		console.log(scrollTop);
		//服务步骤模块
		if(scrollTop > (moduleSevenOffsetTop - windowHeight+200)) {
			// alert("ok");
			if(windowWidth>980){
				$(".body7 ul").animate({
					left: "13%",
					opacity: "1"
				}, 1000);
			}else{
			$(".body7 ul").animate({
					left: "5%",
					opacity: "1"
				}, 1000);
			}
		}
	});
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop1 = $(window).scrollTop();
	
		//高级方案模块
		if(scrollTop1 > (moduleSevenOffsetTop1 - windowHeight+200)) {
			// alert("ok");
			$(".body1-ul1").animate({
				left: "-16.5%",
				opacity: "1"
			}, 1000);
			$(".body1-ul2").animate({
				right: "-10%",
				opacity: "1"
			}, 1000);
		}
		
	});
	$(window).scroll(function() {
		// 获取滚动条滚动的距离
		var scrollTop2 = $(window).scrollTop();
	
		//高级方案模块
		if(scrollTop2 > (moduleSevenOffsetTop2 - windowHeight+200)) {
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
		if(scrollTop3 > (moduleSevenOffsetTop3 - windowHeight+200)) {
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
		if(scrollTop4 > (moduleSevenOffsetTop4 - windowHeight+100)) {
			if(windowWidth>980){
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
			}else{
				$(".txt-list-div1").animate({
					right: "7%",
					opacity: "1"
				}, 1000);
				$(".txt-list-div2").animate({
					right: "8%",
					opacity: "1"
				}, 1500);
				$(".txt-list-div3").animate({
					right: "11%",
					opacity: "1"
				}, 2000);
			}
		}
	});
});
