/**
 * Created by 小白 on 2017/7/25.
 */

var $ = jQuery.noConflict();
(function () {

    //显示在导航上面的每一个按钮
    function NavigaterItem(obj) {
        var obj = obj||{};
        this.name = obj.cat_name;
        this.id = obj.cat_id;
        this.item =  $("<li>"+this.name+"</li>");
    }

    NavigaterItem.prototype.itemClick = function (callback) {
        this.item.on("click",this,callback);
        return this;
    };

    // function  JQuery(selector) {
    //     this.dom = document.querySelector(selector);
    // }
    // JQuery.prototype.on = function (type,parm,fun) {
    //     this.dom.addEventListener(type,function (event) {
    //         event.data = parm;
    //         fun(event);
    //     });
    // };

    window.NavigaterItem = NavigaterItem;

    function  Navigater() {

    }

    //点击导航按钮的时候，需要知道点击按钮的商品类型ID
    Navigater.prototype.createView = function (url,superView,callback) {
        $.get(url,function (result) {
            console.log(result);
            if (result.code == 0){
                result.data.forEach(function (obj) {
                    superView.append(new NavigaterItem(obj).itemClick(callback).item);
                });
            }
        });
        return this;
    };

    window.Navigater = Navigater;
})();