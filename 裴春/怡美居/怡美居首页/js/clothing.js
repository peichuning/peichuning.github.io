/**
 * Created by Administrator on 2017/8/20.
 */
$(".navother1").click(function () {
    $(".denglu").animate({
        top:150
    },1500);
    $(".bigdenglu").addClass('active');
})
$(".bigdenglu").click(function () {
    $(".bigdenglu").removeClass('active');
})

{
    let flag=true
    $(".shopping").click(function () {
        if(flag){
            $(".navbaruldown").addClass('active').css("background","#000");
        }else{
            $(".navbaruldown").removeClass('active');
        }
        flag=!flag
    })
}

{
    let flag=true
    $(".buynewcar").click(function () {
        if(flag){
            $(".buycar").addClass('active');
        }else{
            $(".buycar").removeClass('active');
        }
        flag=!flag
    })
}

$(".swiper-slide img").addClass("animated bounceInDown");
$(".swiper-slide-nei h3").addClass("animated rubberBand");
$(".swiper-slide-nei p").addClass("animated bounceIn");
$(".swiper-slide-neianimate li").addClass("animated swing")

    setInterval(function () {

    },3000)



