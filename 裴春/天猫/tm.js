{
    const top=document.querySelectorAll(".brand-left-top li");
    const bottom=document.querySelectorAll(".brand-cover li");
    //const masks=document.querySelectorAll(".brand-cover #mask")
        bottom.forEach(function (ele,index) {
            ele.onmouseover=function () {
                top.forEach(function (ele,index) {
                    ele.style.display="none";
                    ele.style.display="none";
                    //masks[index].style.opacity=0;
                })
                top[index].style.zIndex=2;
                top[index].style.display="block";
                //masks[index].style.opacity=1;
            }
        })

}


{
    const nav=document.querySelectorAll(".slider-nav li");
    const img=document.querySelectorAll(".to-banner-img li");
    const banner=document.querySelector(".banner-pirce");
    console.log(nav);
    console.log(img);
    console.log(banner);
    var colorarr=["#E8E8E8","#E8E8E8","#FBD858","#E8E8E8","#FBD858"]
    nav.forEach(function (ele,index) {
        ele.onmouseover=function () {
          for(var i=0; i<nav.length; i++){
              nav[i].classList.remove("active");
              img[i].classList.remove("active");
          }
            nav[index].classList.add("active");
            img[index].classList.add("active");
            banner.style.background=colorarr[index];
            num=index;
        }
    })

    let num=0;
    let move=function () {
        num++;
        if(num==nav.length){
           num=0;
        }
        

        for(var i=0; i<nav.length; i++){
            nav[i].classList.remove("active");
            img[i].classList.remove("active");
        }
        nav[num].classList.add("active");
        img[num].classList.add("active");
        banner.style.background=colorarr[num];
    }
    let str=setInterval(move,3000);
    banner.onmousemove=function () {
        clearInterval(str);
    }
    banner.onmouseout=function () {
        str=setInterval(move,3000);
    }
}


{
    {
        const live=document.querySelector(".live-text div")
        let num=0;
        setInterval(function () {
            num++;
            if(num==2){
                num=0
            }
            live.style.marginTop=-num*30+"px";
        },3000)
    }
}


{
    const banner=document.querySelector(".brand-img");
    const right=document.querySelector(".brand-cover-right")
    const left=document.querySelector(".brand-cover-left")

    console.log(banner);
    console.log(right);
    console.log(left);
    

    let move=function () {
        banner.style.marginLeft="-488px";
    }
    let moves=function () {
        banner.style.marginLeft=0;
    }
    
    right.onclick=function () {
        move();
        right.style.opacity="0";
        left.style.opacity="1";

    }
    left.onclick=function () {
        moves();
        right.style.opacity="1";
        left.style.opacity="0";
    }
}

{
    const top=document.querySelector(".onlytop")
    window.onscroll=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=500){
            top.style.top=0;
        }else{
            top.style.top="-40px"
        }
    }
}


{
    const totop=document.querySelector(".right-fixed-four-end");
    totop.onclick=function(){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        var scrollt=obj.scrollTop;
        var time=500;
        var speed=scrollt/time*50;
        let st=setInterval(function(){
            scrollt-=speed;
            obj.scrollTop=scrollt;
            if(scrollt<=0){
                obj.scrollTop=0;
                clearInterval(st);
            }
        },50)
    }
}

//楼层跳转
{
    const btns=document.querySelectorAll("#warpper li");
    const floors=document.querySelectorAll(".floor-line-con");
    const warpper=document.querySelector(".warpper-right");
    console.log(btns)
    console.log(floors)
    console.log(warpper)
    let obj;
    window.addEventListener("scroll",function () {
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        let scroll=obj.scrollTop;
        if(scroll>800){
            warpper.style.cssText="width:36px;height:322px"
        }else{
            warpper.style.cssText="width:0px;height:0px";
        }

        btns.forEach(function (ele,index) {
            ele.onclick=function () {
                var ot=floors[index].offsetTop;
                animate(obj,{scrollTop:ot},500)
            }
        })
    })
    const colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"]
    window.addEventListener("scroll",function () {
        let st=obj.scrollTop;
        for(var i=0; i<floors.length; i++){
            if(st>=floors[i].offsetTop){
                btns.forEach(function (ele) {
                    ele.style.background="";
                })
                btns[i].style.background=colorArr[i] ;
            }
        }
    })
}


//回顶部
{
    const totop=document.querySelector(".warpper-right-bottom");
    totop.onclick=function(){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        var scrollt=obj.scrollTop;
        var time=500;
        var speed=scrollt/time*50;
        let st=setInterval(function(){
            scrollt-=speed;
            obj.scrollTop=scrollt;
            if(scrollt<=0){
                obj.scrollTop=0;
                clearInterval(st);
            }
        },50)
    }
}

