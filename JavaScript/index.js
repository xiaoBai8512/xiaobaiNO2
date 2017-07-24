/**
 * Created by 小白 on 2017/7/24.
 */
function init() {

    $(".header-top-login").click(function () {

        new Login(function (user) {
            $("#header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });
}

init();