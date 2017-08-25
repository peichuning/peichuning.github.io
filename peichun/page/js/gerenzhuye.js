//导航显示隐藏
$(".dh").click(function () {
    $(".hide").show(300).fadeIn(500)
})
$(".hide-close").click(function () {
    $(".hide").hide(300)
})
//透明度
$(".ourwork").mousemove(function () {
    $(this).each(function () {
        $(this).css({opacity:0.8})
    })
})
$(".ourwork").mouseout(function () {
    $(this).each(function () {
        $(this).css("opacity","1")
    })
})
//导航跳
let btn=$(".hide a")
btn.click(function (){
    var index=$(this).index()
    var ot=$(".floor").eq(index).offset().top;
    $("html,body").animate({scrollTop:ot},(1000));
    let colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9"]
    $(this).css("background",colorArr[index]).siblings().css("background","transparent")
})

$(window).scroll(function () {
    var st=$(window).scrollTop();
    let colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9"]
    $(".floor").each(function (index) {
        if(st>=$(this).offset().top){
            $(".btn").css("background","").eq(index).css("background",colorArr[index]);
        }
    })
})

//箭头点击下移
// $(".header-jiantou span").click(function () {
//     var ot=$(".about").offset().top
//     $("html,body").animate({scrollTop:ot},1000)
// })

// {
//     console.log(8|1)//输出结果为9
// }

 $(".main").fullpage({
     anchors:['page1','page2','page3','page4','page5'],
     navigation:true,
     easing:"easeOutBounce",
     fixedElements:"#menu",
     menu:"menu",
     afterLoad:function (anchorLink,index) {
         if(index===1) {
             $(".header-jieshaoleft").animate({
                 opacity:1
             },100)
             $(".header2").animate({
                 opacity:1
             },100)
             $(".header-jieshaoright").animate({
                 opacity:1
             },500)
             $(".down").animate({
                 opacity:1
             },100)

             $(".header2 span:nth-child(1)").addClass('animated bounceInDown')
             $(".header2 span:nth-child(2)").addClass('animated bounceInUp')
             $(".header2 span:nth-child(3)").addClass('animated bounceInDown')
             $(".header2 span:nth-child(4)").addClass('animated bounceInUp')
             $(".header2 span:nth-child(5)").addClass('animated bounceInDown')
             $(".header2 span:nth-child(6)").addClass('animated bounceInUp')

             $(".HI").addClass('animated flip')
             $(".qianduan").addClass('animated swing')

             $(".hengxiang").animate({
                 width:341.5
             },1000,"easeOutBounce")

             $(".down span").addClass('animated bounceInUp')

             $(".ziwojieshao p:nth-child(1)").addClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(2)").addClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(3)").addClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(4)").addClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(5)").addClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(6)").addClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(7)").addClass('animated bounceInLeft')

             $(".header-jieshaoright").animate({
                 width:273.19
             },500,"easeOutBounce")
         }

         if(index===2){
             $(".aboutleft").animate({
                 opacity:1
             },100)
             $(".aboutright").animate({
                 opacity:1
             },100)
             $(".aboutleft").addClass('animated bounceIn')
             $(".aboutleft h2").addClass('animated fadeInDownBig')
             $(".aboutleft p").addClass('animated fadeInLeft')

             $(".aboutright1 li:nth-child(1)").addClass('animated bounceInLeft')
             $(".aboutright1 li:nth-child(2)").addClass('animated bounceInDown')
             $(".aboutright1 li:nth-child(3)").addClass('animated bounceInUp')
             $(".aboutright1 li:nth-child(4)").addClass('animated bounceInRight')
         }

         if(index===3){
             $(".itemimg1").animate({
                  marginLeft:0,
                  opacity:1
              },1500,"easeOutElastic")

             $(".itemimg2").animate({
                 marginLeft:0,
                 opacity:1
             },1000,"easeOutElastic")

             $(".itemimg3").animate({
                 marginRight:0,
                 opacity:1
             },1000,"easeOutElastic")
             $(".itemimg4").animate({
                 marginRight:0,
                 opacity:1
             },1500,"easeOutElastic")

             $(".h41").animate({
                 marginLeft:0,
                 opacity:1
             },1600,"easeOutElastic")
             $(".h42").animate({
                 marginLeft:0,
                 opacity:1
             },1100,"easeOutElastic")
             $(".h43").animate({
                 marginRight:0,
                 opacity:1
             },1100,"easeOutElastic")
             $(".h44").animate({
                 marginRight:0,
                 opacity:1
             },1600,"easeOutElastic")

             $(".p1").animate({
                 marginLeft:0,
                 opacity:1
             },1600,"easeOutElastic")
             $(".p2").animate({
                 marginLeft:0,
                 opacity:1
             },1100,"easeOutElastic")
             $(".p3").animate({
                 marginLeft:0,
                 opacity:1
             },1100,"easeOutElastic")
             $(".p4").animate({
                 marginLeft:0,
                 opacity:1
             },1600,"easeOutElastic")

             $(".Servicesbottom1").animate({
                 marginTop:0,
                 opacity:1
             },1000)
             $(".Servicesbottom2").animate({
                 marginTop:0,
                 opacity:1
             },1200)
             $(".Servicesbottom3").animate({
                 marginTop:0,
                 opacity:1
             },1400)
             $(".Servicesbottom4").animate({
                 marginTop:0,
                 opacity:1
             },1600)
         }

         if(index==4){
             $(".text-vertical-center").animate({
                 opacity:1
             },100)
             $(".text-vertical-center h1").addClass('animated rotateIn')
             $(".text-vertical-center p:nth-of-type(1)").addClass('animated rotateInDownLeft')
             $(".text-vertical-center p:nth-of-type(2)").addClass('animated rotateInDownRight')
             $(".text-vertical-center p:nth-of-type(3)").addClass('animated rotateInUpLeft')
             $(".text-vertical-center p:nth-of-type(4)").addClass('animated rotateInUpRight')
             $(".text-vertical-center p:nth-of-type(5)").addClass('animated rotateInDownLeft')
             $(".text-vertical-center p:nth-of-type(6)").addClass('animated rotateInDownRight')
             $(".text-vertical-center p:nth-of-type(7)").addClass('animated rotateInUpLeft')
             $(".text-vertical-center p:nth-of-type(8)").addClass('animated rotateInUpRight')
         }

         if(index===5){
             $(".bg-primary1 h1").animate({
                 opacity:1
             },100)
             $(".primaryleft").animate({
                 opacity:1
             },100)
             $(".primaryright").animate({
                 opacity:1
             },500)
             $(".bg-primary1 h1").addClass('animated bounceInDown')
             $(".primarytel input").addClass('animated slideInLeft')
             $(".primaryemail input").addClass('animated slideInLeft')
             $(".primarytext input").addClass('animated slideInLeft')
             $(".primaryrightimg").addClass('animated slideInRight')
             $(".primaryright a").addClass('animated shake')
         }

     },
     onLeave:function (nextIndex,index) {
         if(index===1){
             $(".header-jieshaoleft").animate({
                 opacity:0
             },100)
             $(".header2").animate({
                 opacity:0
             },100)
             $(".header-jieshaoright").animate({
                 opacity:0
             },100)
             $(".down").animate({
                 opacity:0
             },100)

             $(".header2 span:nth-child(1)").removeClass('animated bounceInDown')
             $(".header2 span:nth-child(2)").removeClass('animated bounceInUp')
             $(".header2 span:nth-child(3)").removeClass('animated bounceInDown')
             $(".header2 span:nth-child(4)").removeClass('animated bounceInUp')
             $(".header2 span:nth-child(5)").removeClass('animated bounceInDown')
             $(".header2 span:nth-child(6)").removeClass('animated bounceInUp')

             $(".HI").removeClass('animated flip')
             $(".qianduan").removeClass('animated swing')

             $(".hengxiang").animate({
                 width:0
             },500,"easeOutBounce")

             $(".down span").removeClass('animated bounceInUp')

             $(".ziwojieshao p:nth-child(1)").removeClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(2)").removeClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(3)").removeClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(4)").removeClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(5)").removeClass('animated bounceInLeft')
             $(".ziwojieshao p:nth-child(6)").removeClass('animated bounceInRight')
             $(".ziwojieshao p:nth-child(7)").removeClass('animated bounceInLeft')

             $(".header-jieshaoright").animate({
                 width:0
             },1000,"easeOutBounce")
         }

         if(index===2){
             $(".aboutleft").animate({
                 opacity:0
             },100)
             $(".aboutright").animate({
                 opacity:0
             },100)
             $(".aboutleft").removeClass('animated bounceIn')
             $(".aboutleft h2").removeClass('animated fadeInDownBig')
             $(".aboutleft p").removeClass('animated fadeInLeft')

             $(".aboutright1 li:nth-child(1)").removeClass('animated bounceInLeft')
             $(".aboutright1 li:nth-child(2)").removeClass('animated bounceInDown')
             $(".aboutright1 li:nth-child(3)").removeClass('animated bounceInUp')
             $(".aboutright1 li:nth-child(4)").removeClass('animated bounceInRight')
         }

         if(index==4){
             $(".text-vertical-center").animate({
                 opacity:0
             },100)
             $(".text-vertical-center h1").removeClass('animated rotateIn')
             $(".text-vertical-center p:nth-of-type(1)").removeClass('animated rotateInDownLeft')
             $(".text-vertical-center p:nth-of-type(2)").removeClass('animated rotateInDownRight')
             $(".text-vertical-center p:nth-of-type(3)").removeClass('animated rotateInUpLeft')
             $(".text-vertical-center p:nth-of-type(4)").removeClass('animated rotateInUpRight')
             $(".text-vertical-center p:nth-of-type(5)").removeClass('animated rotateInDownLeft')
             $(".text-vertical-center p:nth-of-type(6)").removeClass('animated rotateInDownRight')
             $(".text-vertical-center p:nth-of-type(7)").removeClass('animated rotateInUpLeft')
             $(".text-vertical-center p:nth-of-type(8)").removeClass('animated rotateInUpRight')
         }

         if(index===5){
             $(".bg-primary1 h1").animate({
                 opacity:0
             },100)
             $(".primaryleft").animate({
                 opacity:0
             },100)
             $(".primaryright").animate({
                 opacity:0
             },100)
             $(".bg-primary1 h1").removeClass('animated bounceInDown')
             $(".primarytel input").removeClass('animated slideInLeft')
             $(".primaryemail input").removeClass('animated slideInLeft')
             $(".primarytext input").removeClass('animated slideInLeft')
             $(".primaryrightimg").removeClass('animated slideInRight')
             $(".primaryright a").removeClass('animated shake')
         }
     }

})
$(".down span").click(function () {
    $.fn.fullpage.moveSectionDown();
})

$(".header-jieshaoleft").animate({
    opacity:1
},100)
$(".header2").animate({
    opacity:1
},100)
$(".header-jieshaoright").animate({
    opacity:1
},100)
$(".down").animate({
    opacity:1
},100)
$(".header2 span:nth-child(1)").addClass('animated bounceInDown')
$(".header2 span:nth-child(2)").addClass('animated bounceInUp')
$(".header2 span:nth-child(3)").addClass('animated bounceInDown')
$(".header2 span:nth-child(4)").addClass('animated bounceInUp')
$(".header2 span:nth-child(5)").addClass('animated bounceInDown')
$(".header2 span:nth-child(6)").addClass('animated bounceInUp')

$(".HI").addClass('animated flip')
$(".qianduan").addClass('animated swing')

$(".hengxiang").animate({
    width:341.5
},2000,"easeOutBounce")

$(".down span").addClass('animated bounceInUp')

$(".ziwojieshao p:nth-child(1)").addClass('animated bounceInLeft')
$(".ziwojieshao p:nth-child(2)").addClass('animated bounceInRight')
$(".ziwojieshao p:nth-child(3)").addClass('animated bounceInLeft')
$(".ziwojieshao p:nth-child(4)").addClass('animated bounceInRight')
$(".ziwojieshao p:nth-child(5)").addClass('animated bounceInLeft')
$(".ziwojieshao p:nth-child(6)").addClass('animated bounceInRight')
$(".ziwojieshao p:nth-child(7)").addClass('animated bounceInLeft')

$(".header-jieshaoright").animate({
    width:273.19
},2000,"easeOutBounce")



$(".Servicestext h2").addClass('animated tada')
$(".Servicestext i").addClass('animated tada')






