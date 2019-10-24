/*
*
* created by smpower
* Email: bzsjxhywrf@outlook.com
* GitHub: https://github.com/smpower/
*
* */

function splitPage() {

    // 获取第三个模块元素
    //--> 获取‘首页’按钮
    var firstPageBtn = $(".module-03 .page-control .first-page");

    //--> 获取‘上一页’按钮
    var prevPageBtn = $(".module-03 .page-control .prev-page");

    //--> 获取‘下一页’按钮
    var nextPageBtn = $(".module-03 .page-control .next-page");

    //--> 获取‘末页’按钮
    var lastPageBtn = $(".module-03 .page-control .last-page");

    //--> 获取‘页码’数字
    var pageNum = $(".module-03 .page-control .page-num span");

    //--> 获取页码 1
    var pageOne = $(".module-03 .page-control .page-num span:nth-child(1)");

    //--> 获取页码 2
    var pageTwo = $(".module-03 .page-control .page-num span:nth-child(2)");

    //--> 点击‘首页’按钮
    firstPageBtn.click(function () {
        $(".module-03 .main .page:nth-child(1)").addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#c1c1c1"
        });
        prevPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        nextPageBtn.css({
            "color": "#fd3232"
        });
        lastPageBtn.css({
            "color": "#fd3232"
        });
        pageOne.css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        });
        pageTwo.css({
            "color": "#fd3232",
            "backgroundColor": "#fff",
            "border": "1px solid #c1c1c1"
        });
        $(pageNum[0]).addClass("active").siblings().removeClass("active");
    });

    //--> 点击‘上一页’按钮
    prevPageBtn.click(function () {
        $(".module-03 .main .page:nth-child(1)").addClass("active").siblings().removeClass("active");
        $(pageNum[0]).addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        nextPageBtn.css({
            "color": "#fd3232"
        });
        lastPageBtn.css({
            "color": "#fd3232"
        });
        firstPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        pageOne.css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        });
        pageTwo.css({
            "color": "#fd3232",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
    });

    //--> 点击‘下一页’按钮
    nextPageBtn.click(function () {
        $(".module-03 .main .page:nth-child(2)").addClass("active").siblings().removeClass("active");
        $(pageNum[1]).addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        prevPageBtn.css({
            "color": "#fd3232"
        });
        firstPageBtn.css({
            "color": "#fd3232"
        });
        lastPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        pageOne.css({
            "color": "#fd3232",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        pageTwo.css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        });
    });

    //--> 点击‘末页’按钮
    lastPageBtn.click(function () {
        $(".module-03 .main .page:nth-child(2)").addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        firstPageBtn.css({
            "disabled": "",
            "color": "#fd3232"
        });
        prevPageBtn.css({
            "color": "#fd3232",
            "border": "1px soilid #fd3232"
        });
        nextPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1"
        });
        pageOne.css({
            "color": "#fd3232",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        pageTwo.css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        });
        $(pageNum[1]).addClass("active").siblings().removeClass("active");
    });

    //--> 点击‘页码’数字按钮
    //--> 点击页码 1
    pageOne.click(function () {
        $(".module-03 .main .page:nth-child(1)").addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        }).siblings().css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        prevPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        firstPageBtn.css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        nextPageBtn.css({
            "color": "#fd3232"
        });
        lastPageBtn.css({
            "color": "#fd3232"
        });
        pageTwo.css({
            "color": "#fd3232"
        });
    });

    //--> 点击页码 2
    pageTwo.click(function () {
        $(".module-03 .main .page:nth-child(2)").addClass("active").siblings().removeClass("active");
        $(this).css({
            "color": "#fff",
            "border": "1px solid #fd3232",
            "backgroundColor": "#fd3232"
        }).siblings().css({
            "color": "#c1c1c1",
            "border": "1px solid #c1c1c1",
            "backgroundColor": "#fff"
        });
        nextPageBtn.css({
            "color": "#c1c1c1"
        });
        lastPageBtn.css({
            "color": "#c1c1c1"
        });
        firstPageBtn.css({
            "color": "#fd3232"
        });
        prevPageBtn.css({
            "color": "#fd3232"
        });
        pageOne.css({
            "color": "#fd3232"
        });
    });
}
splitPage();