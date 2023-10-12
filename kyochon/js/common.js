(function(){
    splash();
    todayFd();
    order();
    main();
    typeLogin();
    typeOrderMenu();
    typeSplash();
    typeAmain();
});

$(function(){
    var posArr = [];
    var cnt = $("#list > li").length;
    var startTouchX = '';
    var startTouchY = '';
    var moveTouchX = '';
    var moveTouchY = '';

//B-Mo
    //splash.html
    var splash = {
        init: function(){
            this.$setSplash = $('#splash');
            this.act();
        },
        act:function(){
            var _this = this;
            var ms15 = 1500;
            var fontRed = ["../img/icons/title_txt1.png","../img/icons/title_txt2.png","../img/icons/title_txt3.png","../img/icons/title_txt4.png"];
            var fontRedAdd =  $('<img src='+fontRed[0]+'><img src='+fontRed[1]+'><img src='+fontRed[2]+'><img src='+fontRed[3]+'>');

            this.$setSplash = function(e) {
                var txtBom = $('.txtBom');
                $('.sReply').css('display','none');
                $('.titleImg .hideTxt').delay().fadeOut();
                $('.moveTxt').delay(1500).addClass('on');
                txtBom.append(fontRedAdd);
                $('.moveTxt').delay(2200).fadeOut();
                fontRedAdd.animate({opacity:0}, 4000)
                    .animate({marginTop:"-700px",opacity:1,transition:".1s"}, 300).delay(800);
                $('.sReply').addClass('on').delay(2700).fadeIn();
                $('.sReply.on').append('<img src="../img/icons/splash_text1.png"><img src="../img/icons/splash_icon1.png">\
                    <img src="../img/icons/splash_icon2.png"><img src="../img/icons/splash_text2.png">\
                    <img src="../img/icons/splash_text3.png"><img src="../img/icons/splash_text4.png">\
                    <img src="../img/icons/splash_icon3.png"><img src="../img/icons/splash_text5.png">\
                    <img src="../img/icons/splash_text6.png"><img src="../img/icons/splash_text7.png">\
                    <img src="../img/icons/splash_icon4.png">');
            }
            setTimeout(this.$setSplash,ms15);
        }
    }
    $('#splash').length && splash.init();

    //index_welcome.html
    var welcome = {
        init: function(){
            this.$wellAni = $('.subAni');
            this.act();
        },
        act:function(){
            var _this = this;
            var ms100 = 100;
            this.$wellAni = function(e) {
                $('.welcomeCover .bgRed').show().fadeOut(1500);
                $('.subMnCover .subpop').hide();
                $('.welcomeCover .welVisit1').animate({opacity:1}, 800).delay(1000).fadeOut();
                $('.welcomeCover .welVisit3').animate({opacity:1}, 3500).delay(3500).fadeOut();
                $('.welcomeCover .welVisit4').animate({opacity:1}, 3800).delay(3800);
                $('.subMnCover .subpop').animate({opacity:1},7800).fadeIn();
            }
            setTimeout(this.$wellAni,ms100);
        }
    }
    $('.subAni').length && welcome.init();

    //index_chfriends.html
    var todayFd = {
        init: function(){
            this.$btn = $('#evenTh');
            this.$imgArr1= ["../../type_B/img/sub_person2.png"];
            this.$imgArr2 = ["../../type_B/img/sub_person2.png","../../type_B/img/sub_person2_1.png"];
            this.$imgArr3= ["../../type_B/img/sub_person2.png","../../type_B/img/sub_person2_1.png"];
            this.act();
        },
        act:function(){
            var _this = this;
            var ms15 = 1500;
            var imgNum = Math.round(Math.random()*1);
            var todayTime = function(e){
                $('.todayFd').append('<div class="luvEvent type2"><span></span><span></span><span></span><span></span><span></span></div>\
                                    <div class="luvEvent type3"><span></span><span></span><span></span><span></span><span></span></div>\
                                    <div class="luvEvent type4"><span></span><span></span><span></span><span></span><span></span></div>\
                                    <div class="bigLuv type2"><span></span><span></span><span></span><span></span><span></span></div>\
                                    <div class="bigLuv type3"><span></span><span></span><span></span><span></span><span></span></div>\
                                    <div class="bigLuv type4"><span></span><span></span><span></span><span></span><span></span></div>');
                $('.luvEvent.type2, .luvEvent.type3, .luvEvent.type4, .bigLuv.type2, .bigLuv.type3, .bigLuv.type4');
            }
            setTimeout(todayTime,ms15);

            $.map(this.$imgArr1, function(idx,index){
                $('#mainPer').attr('src',idx).append();
            });

            this.$btn.click(function(e){
                e.preventDefault();
                $('.luvEvent.type1, .bigLuv.type1').append('<span></span><span></span><span></span><span></span><span></span>').fadeToggle(9000);
                $('#mainPer').addClass('on');
                // .animate({marginTop:"-10px",opacity:1,transition:".1s"}, 300);
            });

            showIcon();
        }
    }
    $('.todayFd').length && todayFd.init();

    //index_sub_order_self.html
    var order = {
        init: function(){
            this.act();
        },
        act:function(){
            var _this = this;

            $('#order .mainList .arrive').addClass('active');

            $('#contents').on('scroll', function(){
                $('#order .mainList li').each(function(ea,i){
                    var idx = $(this).offset().top +1;
                    var eq = $(this).parent();
                    var a = eq.children(':eq(1)').addClass('active');
                    console.log(a)
                    switch(ea){
                        case 1 :
                            if(idx > 168){
                                eq.children(':eq(1)').addClass('active');
                                eq.children().children().addClass('active');
                            }
                            break;
                        case 2 :
                            if(idx < 210){
                                eq.children(':eq(2)').addClass('active');
                            }
                            break;
                        case 3 :
                            if(idx > 180){
                                eq.children(':eq(3)').addClass('active');
                            }
                            break;
                        case 4 :
                            if(idx < 320){
                                eq.children(':eq(4)').addClass('active');
                            }
                            break;
                        default: break;
                    }
                });
            });

            var swiper = new Swiper('.pattenSwi.swiper-container', {
                slidesPerView : 'auto',
                spaceBetween: 2,
                loop: false, //
                on: {
                    slideChange: function (){
                        var th = this.realIndex;
                        if(this.realIndex == 0) {
                            $('.swiper-slide').find('.graphFont').addClass('active').delay(1000);
                        } else if (this.realIndex == 1) {
                            $('.swiper-slide').find('.graphColor').addClass('active').delay(1000);
                        }
                    },
                    mouseleave: function (){
                        this(AllowSlidePrev,false)
                    }
                }
            });

            noticeRolling();
        }
    }
    $('#order.defaltbBg .mainList').length && order.init();

    //main.html
    var main = {
        init: function(){
            this.$swiImg = ["../img/main_swiper1.png", "../img/main_swiper2.png", "../img/main_swiper3.png"];
            this.$ea = ["../img/main_icon1.png", "../img/main_icon2.png", "../img/main_icon3.png"];
            this.$value = $('.priceCover ul');
            this.$sm =  $('<li class="swiper-slide"><img src='+this.$swiImg[0]+'></li>\
                            <li class="swiper-slide"><img src='+this.$swiImg[1]+'></li>\
                            <li class="swiper-slide"><img src='+this.$swiImg[2]+'></li>');
            this.$new1 = $('<img src='+this.$ea[0]+' class="moving1"><img src='+this.$ea[0]+' class="moving1 add-a">');
            this.$new2 = $('<img src='+this.$ea[1]+' class="moving2"><img src='+this.$ea[1]+' class="moving2 add-b">');
            this.$new3 = $('<img src='+this.$ea[2]+' class="moving1"><img src='+this.$ea[2]+' class="moving1 add-c">');
            this.$bgSwi = $('.defaltbBg').children('.mainList');
            this.act();
        },
        act:function(){
            var _this = this;
            var didScroll = false;

            function hasScrolled(){
                if(didScroll) {
                    if($(".mainHeader").offset().top < 0) {
                        $('#header').addClass('add');
                        $('.mBtnOrder').css('display','none');
                    } else {
                        $('#header').removeClass('add');
                        $('.mBtnOrder').css('display','block');
                    }
                    didScroll = false;
                } else {
                    // $('#header').removeClass('add');
                    $('.mBtnOrder').css('display','block');
                }
            }

            setInterval(function(){
                hasScrolled();
            }, 250);

            $(window).on("mousewheel",function(elm){
                didScroll = true;
            });

            $('#contents').on('scroll', function(){
                var list = $('.defaltbBg .mainList').children();
                list.each(function(ea,idx){
                    var top = $(this).offset().top;
                    if(top > 0){
                        list.parent().children(':eq(3)').delay(000).addClass('active');
                    }else if(top < 350){
                        list.parent().children(':eq(4)').delay(3000).addClass('active');
                    }
                });

            });

            $('.defaltbBg .mainList div').addClass('active');

            this.$value.append(this.$sm);
            $('.itemIcon').append(this.$new1,this.$new2,this.$new3);

            var $banner = this.$bgSwi.children('.banner');
            var $chicken = this.$bgSwi.children('.priceCover');

            new Swiper($chicken,{
                slidesPerView : 'auto',
                autoplay: true,
                loop: 8000,
            });

            new Swiper($banner,{
                slidesPerView : 'auto',
                spaceBetween: 3,
                autoplay: true,
                loop: 6000,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

        }
    }
    $('.defaltbBg .mainList').length && main.init();


//A-Mo
    //index_login.html
    var typeLogin = {
        init: function(){
            this.act();
        },
        act:function(){
            var _this = this;
            var swiper = new Swiper(".reviewBanner.swiper-container", {
                direction :'vertical',
                spaceBetween:2,
                autoplay:true,
                loop:2000,
            });
        }
    }
    $('.loginOnCover').length && typeLogin.init();

    //index_login.html
    var typeOrderMenu = {
        init: function(){
            this.act();
        },
        act:function(){
            var _this = this;
            $('.otEvent').show();
            $('.linkMotion').click(function(){
                $('.otEvent').fadeOut(300);
            });

            $('.link2').click(function(){
                $("body").css("overflow","hidden");
                $("body").append("<div id='bim'></div><img src='../img/sub_order3_popup.png' class='orderPop'><a href='./order_pay.html' class='link3'>");
                $("#bim").css({
                    "position":"fixed",
                    "top":"0px",
                    "left":"0px",
                    "width":"100%",
                    "height":"100%",
                    "background-color":"#000",
                    "z-index":"1",
                    "opacity":"0.5"
                });
            })
        }
    }
    $('.orderMenuA').length && typeOrderMenu.init();

    //splash.html
    var typeSplash = {
        init: function(){
            this.$shCoverBg = $('.shCoverBg');
            this.act();
        },
        act:function(){
            var _this = this;
            var ms100 = 100;
            this.$shCoverBg = function(e) {
                $('.fdeeBg').show();
                $('#firstIcon .icon1').animate({opacity:1}, 800)
                    .animate({marginLeft:"-245px"}, 600).delay(800).fadeOut();
                $('#firstIcon .icon2').animate({opacity:0.8}, 1200)
                    .animate({marginTop:"364px",opacity:1}, 300).delay(600).fadeOut();//374
                $('#secondIcon .icon1').animate({opacity:1}, 3000)
                    .animate({marginLeft:"-245px"}, 500).delay(800).fadeOut();
                $('#secondIcon .icon2').animate({opacity:0.8}, 3000)
                    .animate({marginTop:"364px",opacity:1}, 500).delay(800).fadeOut();
                $('.motionBg').delay(5000).fadeIn();
                $('.motionBg .logoBg').addClass('on');
                $('.slowBg .icon3').delay(6500).fadeIn();
                $('.slowBg .icon4').delay(6500).fadeIn();
                $('.slowBg .mvChk').delay(6800).fadeIn();
            }
            setTimeout(this.$shCoverBg,ms100);
        }
    }
    $('.shCoverBg').length && typeSplash.init();

    //main.html
    var typeAmain = {
        init: function(){
            this.$bgSwioff = $('.loginOffCover');
            this.$bgSwion = $('.loginOnCover');
            this.act();
            this.goodsInit();
        },
        act:function(){
            var _this = this;

            $('#loginHeader').click(function(){
                if($(this).hasClass('on')){
                    $(this).removeClass('on');
                }else{
                    $(this).addClass('on');
                }
            });

            var $appBanner = this.$bgSwioff.children('.countBanner.swiper-container');
            var $appBanner2 = this.$bgSwion.children('.countBanner.swiper-container');
            var $reviewBanner = this.$bgSwioff.children('.reviewBanner.swiper-container');
            var $reviewBanner2 = this.$bgSwion.children('.reviewBanner.swiper-container');

            new Swiper($appBanner,{
                direction : 'horizontal',
                spaceBetween: 3,
                autoplay: true,
                loop: 3000,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
            new Swiper($appBanner2,{
                direction : 'horizontal',
                spaceBetween: 3,
                autoplay: true,
                loop: 3000,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            new Swiper($reviewBanner,{
                direction :'vertical',
                spaceBetween:2,
                autoplay:true,
                loop:2000,
            });

            new Swiper($reviewBanner2,{
                direction :'vertical',
                spaceBetween:2,
                autoplay:true,
                loop:2000,
            });
        },
        goodsInit(){
            $("#list > li").each(function(index,obj){
                var pos = {
                    nextPosX : $(obj).offset().left,
                    nextPosY : $(obj).offset().top,
                }
                posArr[index] = pos;
            })

            $('#list > li').on({
                'touchstart' : function(event){
                    event.preventDefault();
                    var e = event.originalEvent;
                    startTouchY = e.targetTouches[0].pageY;
                },
                'touchmove' : function(event){
                    event.preventDefault();
                    var e = event.originalEvent;
                    moveTouchY = e.targetTouches[0].pageY;
                },
                'touchend' : function(event){
                    moveGoods(event);
                },
                'mousedown' : function(event){
                    event.preventDefault();
                    var e = event.originalEvent;
                    startTouchY = e.pageY;
                },
                'mouseup' : function(event){
                    event.preventDefault();
                    var e = event.originalEvent;
                    moveTouchY = e.pageY;
                    moveGoods(event);
                },
            });
        },
    }
    $('.loginOffCover,.loginOnCover').length && typeAmain.init();

    function moveGoods(event){
        if(startTouchY > moveTouchY) {
            $("#list > li").each(function(index,obj){
                var prevX = '';
                var prevY = '';
                if(index == (cnt-1)){
                    prevX = posArr[0].nextPosX;
                    prevY = posArr[0].nextPosY;
                }else{
                    prevX = posArr[index+1].nextPosX;
                    prevY = posArr[index+1].nextPosY;
                }
                $(obj).stop().animate({top: prevY, left: prevX},500,'swing');
            })
            $("#list").prepend($("#list > li").last().detach());
        }else{
            $("#list > li").each(function(index,obj){
                var prevX = '';
                var prevY = '';
                if(index == 0){
                    prevX = posArr[cnt-1].nextPosX;
                    prevY = posArr[cnt-1].nextPosY;
                }else{
                    prevX = posArr[index-1].nextPosX;
                    prevY = posArr[index-1].nextPosY;
                }
                $(obj).stop().animate({top: prevY, left: prevX},500,'swing');
            })
            $("#list").append($("#list > li").first().detach());
        }
        $("#list li").removeClass("on");
        $("#list li").last().addClass("on");

        var goodsNum = $("#list li.on").data("num");
        $(".contList > li").each(function(index,obj){
            var contNum = $(obj).data("num");
            $(".contList > li .titImg").css({'opacity':'0','left':'0px','transform':'translateZ(0%)'});
            $(".contList > li .sideImg").css({'opacity':'0','left':'-20px'});
            if(goodsNum == contNum){
                $(obj).children('.titImg').stop().animate({'opacity':'1','left':'24px','transform':'translate3d(-100%,0,0)'},500);
                $(obj).children('.sideImg').stop().animate({'opacity':'1', 'left':'0'},500)
            }
        });
    }

});

var imgArr1 = new Array("../../type_B/img/sub_person1.png","../../type_B/img/sub_person1_1.png");
var imgArr2 = new Array("../../type_B/img/sub_person2.png","../../type_B/img/sub_person2_1.png");
var height = $(".bestCh li").height();
var num = $(".bestCh li img").length;
var max = height * num;
var move = 0;

function noticeRolling(){
    var height = window.$(".bestCh li").height();
    move += height;
    $(".bestCh li").animate({"top":-move},500,function(){
        if( move >= max ){
            $(this).css("top",0);
            move=0;
            // clearInterval(noticeRollingOff);
        }
    });
};
var noticeRollingOff = setInterval(noticeRolling,3000);

function showIcon(){
    var imgNum = Math.round(Math.random()*1);
    var objIcon = document.getElementById("icon");
    var mainPer = document.getElementById("mainPer");
    document.getElementById('mainPer').style.backgroundSize='cover';
    objIcon.src = imgArr1[imgNum];
    mainPer.src = imgArr2[imgNum];
    setTimeout(showIcon,300);
}