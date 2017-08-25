//轮播图
{
    const img=document.querySelectorAll(".right1 li");
    const nav=document.querySelectorAll(".button li");
    const bannerbox=document.querySelectorAll("right1")
    const grop=document.querySelector(".grop");
    const next=document.querySelector(".next")
    //console.log(img);
    //console.log(nav);
    //console.log(grop);
    //console.log(next);
    //console.log(bannerbox);
    nav.forEach(function (ele,index) {
        ele.onclick=function () {
            nav.forEach(function (ele,index) {
                nav[index].classList.remove("active");
                img[index].classList.remove("active");
            })
            nav[index].classList.add("active");
            img[index].classList.add("active");
            num=index;
        }
    })

    let num=0;
    let move=function () {
        num++;

        if (num==nav.length){
            num=0;
        }

        if(num==-1){
            num=nav.length-1;
        }

        nav.forEach(function (ele,index) {
            nav[index].classList.remove("active");
            img[index].classList.remove("active");
        })
        nav[num].classList.add("active");
        img[num].classList.add("active");
    }

    let str=setInterval(move,3000)
    bannerbox.onmousemove=function () {
        clearInterval(str);
    }
    bannerbox.onmouseout=function () {
        str=setInterval(move,3000);
    }

    next.onclick=function () {
        move();
    }
    grop.onclick=function () {
        num-=2;
        move();
    }
}



{
    //封装函数+调用
    const bannerbox=document.querySelectorAll(".box-nrA")
    bannerbox.forEach(function(e){
        xiaomi(e);
    })
    function xiaomi(box){
    const banners=box.querySelector(".box-nra")
    const dians=box.querySelectorAll(".onlysice li")
    const per=box.querySelector(".box-nrA>.left")
    const nex=box.querySelector(".box-nrA>.right")
    console.log(per)
    console.log(nex)
    let num=0;
    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            banners.style.marginLeft=-index*296+"px";
            dians[index].classList.add("act")
            dians[num].classList.remove("act")
            num=index;
        }
    })
        nex.onclick=function () {
            if(num===dians.length-1){
                return
            }
            num++;
            banners.style.marginLeft=-num*296+"px";

            dians.forEach(function (ele) {
                ele.classList.remove("act")
            })
            dians[num].classList.add("act")
        }

        per.onclick=function () {
            if(num===0){
                return
            }
            num--;
            banners.style.marginLeft=-num*296+"px";
            dians.forEach(function (ele) {
                ele.classList.remove("act")
            })
            dians[num].classList.add("act")
        }

    }

}

//小米单品
{
    const banners=document.querySelector(".box-tp")
    const per=document.querySelector(".jiantou-left")
    const nex=document.querySelector(".jiantou-right")
    //console.log(banner)
    //console.log(per)
    //console.log(next)
    {
        const bannerimg=document.querySelector(".box-tp")
        let num=0;
        setInterval(function () {
            if(num==1){
                bannerimg.style.transition="all 1s";
            }

            bannerimg.style.marginLeft=-num*1180+"px";
        },3000)


        bannerimg.addEventListener("transitionend",function () {
            if(num==0){
                this.style.transition="none";
                bannerimg.style.marginLeft=0;
                num=0;
            }
        })
    }
    
    
    
    
    nex.onclick=function () {
        banners.style.marginLeft="-1226px"
        nex.style.opacity="0.3"
        per.style.opacity="1"
    }
    per.onclick=function () {
        banners.style.marginLeft=0
        nex.style.opacity="1"
        per.style.opacity="0.3"
    }
}