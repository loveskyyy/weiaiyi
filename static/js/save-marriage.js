/**
 * Created by smpower on 2017/8/1.
 * Email: bzsjxhywrf@outlook.com
 * GitHub: https://github.com/smpower/
 */

function moduleFour() {
    // 获取当前文档高度
    var documentHeight = $(document).height();
    // 获取当前屏幕高度
    var windowHeight = $(window).height();
    // 获取第七个模块距离屏幕顶端的高度
    var moduleFourOffsetTop = $(".module-04 .main").offset().top;
    console.log(moduleFourOffsetTop);

    $(window).scroll(function () {
        // 获取滚动条滚动的距离
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if (scrollTop > (moduleFourOffsetTop - windowHeight/2)) {
            $(".module-04 .main .item-group:nth-child(1) .item").animate({
                "padding": "0"
            }, 300);
            $(".module-04 .main .item-group:nth-child(1) .item p").animate({
                "opacity": "1"
            }, 300);
        }

        if (scrollTop > (moduleFourOffsetTop - windowHeight/2 + 400)) {
            $(".module-04 .main .item-group:nth-child(2) .item").animate({
                "padding": "0"
            }, 300);
            $(".module-04 .main .item-group:nth-child(2) .item p").animate({
                "opacity": "1"
            }, 300);
        }
    });
}
moduleFour();