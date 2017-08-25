//创建字母，控制字母下落，字母消除键盘事件
class Game{
    constructor(left,scor,state,life){
        this.left=left;
        this.scor=scor;
        this.state=state;
        this.life=life;
        this.statenum=1;
        this.scornum=0;
        this.num=3;
        this.speed=5;
        this.lifenum=5;
        this.obj={};
        this.height=window.innerHeight;
        this.st=null;
        this.flag=true;
        //this.bestscor=localStorage.scor?JSON.parse(localStorage.scor):[];
    }

    start(){//开始创建字母
        for(let i=0;i<this.num;i++){
            this._createLetter();
        }
        this._move();
        this._keydown();
    }
    _createLetter(){//创建字母的功能，加下划线表示内部使用

        let newdiv=document.createElement("div");
        newdiv.className="letter";

        //字母不重复
        do{
        let randomNum=Math.floor(Math.random()*26)+65;//获取随机字母
        var randomLetter=String.fromCharCode(randomNum);
        }while (this.obj[randomLetter]);

        //位置不重复
        do{
            var randomLeft=Math.random()*720;
        }while (this._checkLeft(randomLeft));

        this.obj[randomLetter]={left:randomLeft,ele:newdiv};//真值即可，核心(获得的随机字母作为变量，对象[变量名]=键值对儿)
        newdiv.style.left=randomLeft+"px";

        let randomTop=Math.random()*100;
        newdiv.style.top=randomTop+"px";
        newdiv.innerHTML=randomLetter;
        //newdiv.style.backgroundImage=`url(images/${randomLetter}.png)`//引入字母图片
        this.left.appendChild(newdiv);
    }

    _checkLeft(left){
        for (let i in this.obj){
            if(left>this.obj[i].left-80&&left<this.obj[i].left+80){
                return true;
            }
        }
        return false;
    }

    _move(){
        this.st=setInterval(function () {
            for (let i in this.obj){
               let top=this.obj[i].ele.offsetTop;
                top+=this.speed;
                this.obj[i].ele.style.top=top+"px";
                if(top>this.height){
                    this.lifenum--;
                    this.life.innerHTML=this.lifenum;
                    this.left.removeChild(this.obj[i].ele);
                    delete this.obj[i];
                    this._createLetter();
                    if(this.lifenum===0){
                        this._gameover();
                    }
                }
            }
        }.bind(this),60)//匿名函数中修改this指针
    }
    _keydown(){
            this.keydownHand=function (e) {
                let kc=e.keyCode;
                let letter=String.fromCharCode(kc);
                if(this.obj[letter]){
                    this.left.removeChild(this.obj[letter].ele);
                    delete this.obj[letter];
                    this._createLetter();
                    this.scornum++;
                    this.scor.innerHTML=this.scornum;
                    if(this.scornum%10===0){
                        this._upstate();
                    }
                }
            }.bind(this);
        document.addEventListener("keydown",this.keydownHand)
    }

    _upstate(){
        this.statenum++;
        this.state.innerHTML=this.statenum;
        if(this.statenum<4){
            this._createLetter();
        }else{
            this.speed++;
        }
    }

    _gameover(){
        alert(`游戏结束 当前得分为${this.scornum}`);
        this.left.innerHTML="";
        this.obj={};
        this.scornum=0;
        this.scor.innerHTML=0;
        this.statenum=1;
        this.state.innerHTML=1;
        this.lifenum=5;
        this.life.innerHTML=5;
        clearInterval(this.st);
        this.flag=true;

    }
    puse(){
        clearInterval(this.st)
        pusebtn.innerHTML="继续"
        document.removeEventListener("keydown",this.keydownHand)
    }
    run(){
        this._move();
        pusebtn.innerHTML="暂停"
        document.addEventListener("keydown",this.keydownHand)
    }

}
let left=document.querySelector(".left");
let scor=document.querySelector("#scor");
let state=document.querySelector("#state");
let life=document.querySelector("#life");
let startbtn=document.querySelector("#strat");
let pusebtn=document.querySelector("#puse")
let game=new Game(left,scor,state,life);

startbtn.onclick=function () {
    if(game.flag){
        game.flag=false;
        game.start();
        // this.style.color="#ccc"
    }
    let flage=true
pusebtn.onclick=function () {
    if(flage){
        game.puse();
    }else(
        game.run()
    )
    flage=!flage
}

}














