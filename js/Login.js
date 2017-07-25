/**
 * Created by Administrator on 2017/7/24.
 */

//为了防止 其他的插件与jquery重名 可以通过noConflict找到jquery对象重新更改表示 jquery的符号
var $ = jQuery.noConflict();
(function () {

    function Login(success) {
        this.showLogin(success);
    }
    Login.prototype.showLogin = function (success) {
        var loginContainer = $("<div class='loginContainer'></div>");
        var closeButton = $("<p>关闭</p>");
        var usernameInput = $("<p><input type='text' placeholder='用户名'></p>");
        var passwordInput = $("<p><input type='password' placeholder='密码'></p>");
        var loginButton = $("<p><button>登录</button></p>");

        loginContainer.css({
            width:"400px",
            height:"300px",
            "background-color":"#912020",
            border: "5px #ffd42e solid",
            position: "absolute",
            top:"50%",
            left:"50%",
            "box-sizing": "border-box",
            margin:"-150px -200px"
        });

        var inputCSS = {
            padding:"20px 0",
            width:"300px",
            margin:"0 auto",
            "text-align": "center"
        };
        usernameInput.css(inputCSS);
        passwordInput.css(inputCSS);
        loginButton.css(inputCSS);

        closeButton.css({
            float:"right",
            color:"white",
            padding:"5px"
        });

        closeButton.click(function () {
            loginContainer.slideUp(500,function () {
                loginContainer.remove();
            });
        });
        
        loginButton.click(function () {
            $.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function (data) {
                    console.log(data);
                    //登录成功
                    if (data.code == 0){

                        loginContainer.slideUp(500,function () {
                            loginContainer.remove();

                        //  执行外面传入的 方法
                            success(data.data);
                        });

                    }else {
                        alert(data.message);
                    }
                }
            );
        });
        
        loginContainer.append(closeButton);
        loginContainer.append(usernameInput);
        loginContainer.append(passwordInput);
        loginContainer.append(loginButton);
        
        $(document.body).append(loginContainer);
    };


    window.Login = Login;
})();