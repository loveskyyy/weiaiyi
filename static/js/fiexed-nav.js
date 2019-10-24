/**
 * Created by smpower on 2017/8/17.
 */

function fixedNav() {
    // alert("ok");
    $(window).scroll(function () {
        // 获取滚动条滚动的距离
        var scrollTop = $(window).scrollTop();

        console.log(scrollTop);

        if (scrollTop > 145) {
            $(".nav").css({
                "position": "fixed",
                "top": 0,
                "z-index": 3,
                "height": 100,
                "box-shadow": "2px 2px 2px rgba(0, 0, 0, .5)"
            });
        } else {
            $(".nav").css({
                "position": "",
                "box-shadow": ""
            });
        }

    });
}
fixedNav();