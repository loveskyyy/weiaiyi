/*
*
* created by smpower
* email: bzsjxhywrf@outlook.com
* GitHub: https://github.com/smpower/
*
* */


// 获取模块一部分元素
//--> 获取 li 元素
var moduleOneLi = $(".module-01 .content li");
//--> 列表标题 moduleOneListTitle
var moduleOneListTitle = $(".module-01 .content .txt .title");
//--> 图片右边的箭头 moduleOneArrow
var moduleOneArrow = $(".module-01 .content li svg.arrow");
//--> 列表前面的数字符号 moduleOnelistNum
var moduleOnelistNum = $(".module-01.content .li svg.triangle");
//--> 获取图片列表的父级元素
var picsGroup = $(".module-01 .content .pics-group");
//--> 获取 img 元素
var pic = $(".module-01 .content .pics-group img");

/* 模块一动效 */
function moduleOne() {
    moduleOneListTitle.mouseover(function () {
        //--> 获取当前 li 元素的下标 listIndex
        var listIndex = $(this).parent().parent().index();

        //--> 当前元素的兄弟元素恢复为原来的颜色
        moduleOneLi.find(".txt .title").css({
            "color": "#2d2d2d"
        });

        //--> 当前元素的文字变为红色
        $(this).css({
            "color": "#fd3232"
        });
        //--> 当前 li 的兄弟元素下的小箭头隐藏 - 不透明度 0
        $(moduleOneLi[listIndex]).siblings().find("svg.arrow").animate({
            "opacity": "0"
        }, 300);


        //--> 当前 li 下的小箭头显示 - 不透明度 1
        $(moduleOneLi[listIndex]).find("svg.arrow").animate({
            "opacity": "1"
        }, 300);


        // console.log($(pic[listIndex]).siblings());

        $(pic[listIndex]).siblings().css({
            "display": "none"
        });
        $(pic[listIndex]).css({
            "display": "block",
            "opacity": "1"
        });

    });

}
moduleOne();

// 获取模块二部分元素
//--> 获取缩略图
var smImg = $(".module-06 .main .img-sm img");
//--> 获取大图(背景)
var lgImgBg = $(".module-06 .main .img-lg");

/* 模块六动效 */
function moduleSix() {
    smImg.mouseover(function () {
        //--> 获取当前缩略图的索引值
        var smImgIndex = $(this).index();
        // console.log(smImgIndex);
        lgImgBg.css({
            "backgroundImage": "url('img/custom-love/m06-pic0" + (smImgIndex+1) + "-lg.png')"
        });
        // console.log(lgImgBg.css("backgroundImage"));
    });
}
moduleSix();


/* 模块七动效 */
function moduleSeven() {
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

        if (scrollTop > (moduleSevenOffsetTop - windowHeight/2)) {
            $(".module-07 .main .row img").animate({
                "left": "0",
                "opacity": "1"
            }, 1000);
            $(".module-07 .main .row .txt").animate({
                "right": "0",
                "opacity": "1"
            }, 1000);
            $(".module-07 .main").animate({
                "opacity": "1"
            }, 1000);
        }

    });

}
moduleSeven();



console.log("橘子情感，为爱而生。");