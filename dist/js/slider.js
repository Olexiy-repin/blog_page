(()=>{$(".sec-02__slider").owlCarousel({items:1,itemsCustom:!0,loop:!0,nav:!0,navText:["<img alt='' src='img/sec-02/prev.png'>","<img alt='' src='img/sec-02/next.png'>"],dot:!0,autoHeight:!1,margin:0}),$(".sec-02__slider").on("changed.owl.carousel",function(e){let t=e.item.index;console.log(t),2==t?$(".sec-02__slider-nav .active").text("01"):3==t?$(".sec-02__slider-nav .active").text("02"):4==t?$(".sec-02__slider-nav .active").text("03"):5==t&&$(".sec-02__slider-nav .active").text("01")});let e=$(".sec-02 .owl-nav .owl-next"),t=$(".sec-02 .owl-nav .owl-prev"),c=1;e.on("click",function(e){++c>3?($(".sec-02__slider-nav .active").text("0"+(c-3)),c=1):$(".sec-02__slider-nav .active").text("0"+c)}),t.on("click",function(e){0==--c?($(".sec-02__slider-nav .active").text("0"+(c+3)),c=3):$(".sec-02__slider-nav .active").text("0"+c)})})(),$(".sec-02__article").on("click",function(e){let t=$(this).find(".sec-02__article-btn.desc-btn")[0].href;window.open(t,"_blank")});