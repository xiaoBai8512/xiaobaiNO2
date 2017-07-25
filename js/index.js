/**
 * Created by Administrator on 2017/7/24.
 */
function init() {

    $(".header-top-login").click(function () {
        new Login(function (user) {
            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });

    // 导航
    new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function (event) {
        console.log(event);
    });


    new corouselView.Corouse("#left-course",[{imagePath:"resouse/image/header/hot1.jpg"},{imagePath:"resouse/image/header/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(0.5*1000);
    new corouselView.Corouse("#center-course",[{imagePath:"resouse/image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"},{imagePath:"resouse/image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"}],752,400).putSuperView().createControlButton().startTimer(1*1000);
    new corouselView.Corouse("#right-course",[{imagePath:"resouse/image/header/hot1.jpg"},{imagePath:"resouse/image/header/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(0.6*1000);

    //url,parm

    new Good(PRODUCT_HOST+GOODS,null,$("#goods-container"),function (event) {
        console.log(event.data);
    });
}

init();