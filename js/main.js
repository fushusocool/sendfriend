    //鑾峰緱涓荤晫闈�
    var mainDiv=document.getElementById("maindiv");
    //鑾峰緱寮€濮嬬晫闈�
var startdiv=document.getElementById("startdiv");
    //鑾峰緱娓告垙涓垎鏁版樉绀虹晫闈�
var scorediv=document.getElementById("scorediv");
    //鑾峰緱鍒嗘暟鐣岄潰
var scorelabel=document.getElementById("label");
    //鑾峰緱鏆傚仠鐣岄潰
var suspenddiv=document.getElementById("suspenddiv");
    //鑾峰緱娓告垙缁撴潫鐣岄潰
var enddiv=document.getElementById("enddiv");
    //鑾峰緱娓告垙缁撴潫鍚庡垎鏁扮粺璁＄晫闈�
var planscore=document.getElementById("planscore");
    //鍒濆鍖栧垎鏁�
var scores=0;

/*
 鍒涘缓椋炴満绫�
 */
function plan(hp,X,Y,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
    this.planX=X;
    this.planY=Y;
    this.imagenode=null;
    this.planhp=hp;
    this.planscore=score;
    this.plansizeX=sizeX;
    this.plansizeY=sizeY;
    this.planboomimage=boomimage;
    this.planisdie=false;
    this.plandietimes=0;
    this.plandietime=dietime;
    this.plansudu=sudu;
//琛屼负
/*
绉诲姩琛屼负
     */
    this.planmove=function(){
        if(scores<=50000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+"px";
        }
        else if(scores>50000&&scores<=100000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+1+"px";
        }
        else if(scores>100000&&scores<=150000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+2+"px";
        }
        else if(scores>150000&&scores<=200000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+3+"px";
        }
        else if(scores>200000&&scores<=300000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+4+"px";
        }
        else{
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+5+"px";
        }
    }
    this.init=function(){
        this.imagenode=document.createElement("img");
        this.imagenode.style.left=this.planX+"px";
        this.imagenode.style.top=this.planY+"px";
        this.imagenode.src=imagesrc;
        mainDiv.appendChild(this.imagenode);
    }
    this.init();
}

/*
鍒涘缓瀛愬脊绫�
 */
function bullet(X,Y,sizeX,sizeY,imagesrc){
    this.bulletX=X;
    this.bulletY=Y;
    this.bulletimage=null;
    this.bulletattach=1;
    this.bulletsizeX=sizeX;
    this.bulletsizeY=sizeY;
//琛屼负
/*
 绉诲姩琛屼负
 */
    this.bulletmove=function(){
        this.bulletimage.style.top=this.bulletimage.offsetTop-20+"px";
    }
    this.init=function(){
        this.bulletimage=document.createElement("img");
        this.bulletimage.style.left= this.bulletX+"px";
        this.bulletimage.style.top= this.bulletY+"px";
        this.bulletimage.src=imagesrc;
        mainDiv.appendChild(this.bulletimage);
    }
    this.init();
}

/*
 鍒涘缓鍗曡瀛愬脊绫�
 */
function oddbullet(X,Y){
    bullet.call(this,X,Y,6,14,"image/bud(1).jpg");
}

/*
鍒涘缓鏁屾満绫�
 */
function enemy(hp,a,b,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
    plan.call(this,hp,random(a,b),-100,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc);
}
//浜х敓min鍒癿ax涔嬮棿鐨勯殢鏈烘暟
function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}

/*
鍒涘缓鏈柟椋炴満绫�
 */
function ourplan(X,Y){
    var imagesrc="image/peo1(1).png";
    plan.call(this,1,X,Y,66,80,0,660,0,"image/peo1(1).png",imagesrc);
    this.imagenode.setAttribute('id','ourplan');
}

/*
 鍒涘缓鏈柟椋炴満
 */
var dW=$('body').width();;
var dH = $('body').height();
var selfplan=new ourplan(dW/2-33,dH*0.75);
//绉诲姩浜嬩欢
var ourPlan=document.getElementById('ourplan');
var yidong=function(){
    // var oevent=window.event||arguments[0];
    // var chufa=oevent.srcElement||oevent.target;
    // var selfplanX=oevent.clientX;
    // var selfplanY=oevent.clientY;
    // ourPlan.style.left=selfplanX-selfplan.plansizeX/2+"px";
    // ourPlan.style.top=selfplanY-selfplan.plansizeY/2+"px";
//    document.getElementsByTagName('img')[0].style.left=selfplanX-selfplan.plansizeX/2+"px";
//    document.getElementsByTagName('img')[0]..style.top=selfplanY-selfplan.plansizeY/2+"px";
    var endTouchY = 0;
    var endTouchX = 0;
    ourPlan.addEventListener('touchstart',function(ev){
        this.addEventListener('touchmove', function(ev){
            ev.preventDefault();
            var ev = ev.touches[0];
            ourPlan.style.top = (ev.pageY-41)+'px';
            ourPlan.style.left = (ev.pageX-33)+'px';
            endTouchX = ev.pageX;
            endTouchY = ev.pageY;
        },false);
        this.addEventListener('touchend', function(ev){
            this.ontouchmove = null;
            this.ontouchend = null;
            var x;
            var y;
            x = (x>(dW-66))?(dW-66):x;
            y = (y>(dH-82))?(dH-82):y;
            ourPlan.style.left = x + 'px';
            ourPlan.style.top = y + 'px';
        },false);
    },false);
}
/*
鏆傚仠浜嬩欢
 */
var number=0;
var zanting=function(){
    if(number==0){
        suspenddiv.style.display="block";
        if(document.removeEventListener){
            mainDiv.removeEventListener("touchstart",yidong,true);
            bodyobj.removeEventListener("touchstart",bianjie,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("ontouchstart",yidong);
            bodyobj.detachEvent("ontouchstart",bianjie);
        }
        clearInterval(set);
        number=1;
    }
    else{
        suspenddiv.style.display="none";
        if(document.addEventListener){
            mainDiv.addEventListener("touchstart",yidong,true);
            bodyobj.addEventListener("touchstart",bianjie,true);
        }
        else if(document.attachEvent){
            mainDiv.attachEvent("ontouchstart",yidong);
            bodyobj.attachEvent("ontouchstart",bianjie);
        }
        set=setInterval(start,20);
        number=0;
    }
}
//鍒ゆ柇鏈柟椋炴満鏄惁绉诲嚭杈圭晫,濡傛灉绉诲嚭杈圭晫,鍒欏彇娑坢ousemove浜嬩欢,鍙嶄箣鍔犱笂mousemove浜嬩欢
var bianjie=function(){
    var oevent=window.event||arguments[0];
    var bodyobjX=oevent.clientX;
    var bodyobjY=oevent.clientY;
    if(bodyobjX<0||bodyobjX>dW||bodyobjY<0||bodyobjY>dH){
        if(document.removeEventListener){
            mainDiv.removeEventListener("touchstart",yidong,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("ontouchstart",yidong);
        }
    }
    else{
        if(document.addEventListener){
            mainDiv.addEventListener("touchstart",yidong,true);
        }
        else if(document.attachEvent){
            mainDiv.attachEvent("notouchstart",yidong);
        }
    }
}

var bodyobj=document.getElementsByTagName("body")[0];
if(document.addEventListener){
    //涓烘湰鏂归鏈烘坊鍔犵Щ鍔ㄥ拰鏆傚仠
    mainDiv.addEventListener("click",yidong,true);
    //涓烘湰鏂归鏈烘坊鍔犳殏鍋滀簨浠�
    selfplan.imagenode.addEventListener("click",zanting,true);
    //涓篵ody娣诲姞鍒ゆ柇鏈柟椋炴満绉诲嚭杈圭晫浜嬩欢
    bodyobj.addEventListener("touchstart",bianjie,true);
    //涓烘殏鍋滅晫闈㈢殑缁х画鎸夐挳娣诲姞鏆傚仠浜嬩欢
    suspenddiv.getElementsByTagName("button")[0].addEventListener("click",zanting,true);
//    suspenddiv.getElementsByTagName("button")[1].addEventListener("click",chongxinkaishi,true);
    //涓烘殏鍋滅晫闈㈢殑杩斿洖涓婚〉鎸夐挳娣诲姞浜嬩欢
    suspenddiv.getElementsByTagName("button")[2].addEventListener("click",jixu,true);
}
else if(document.attachEvent){
    //涓烘湰鏂归鏈烘坊鍔犵Щ鍔�
    mainDiv.attachEvent("ontouchstart",yidong);
    //涓烘湰鏂归鏈烘坊鍔犳殏鍋滀簨浠�
    selfplan.imagenode.attachEvent("onclick",zanting);
    //涓篵ody娣诲姞鍒ゆ柇鏈柟椋炴満绉诲嚭杈圭晫浜嬩欢
    bodyobj.attachEvent("onclick",bianjie);
    //涓烘殏鍋滅晫闈㈢殑缁х画鎸夐挳娣诲姞鏆傚仠浜嬩欢
    suspenddiv.getElementsByTagName("button")[0].attachEvent("onclick",zanting);
//    suspenddiv.getElementsByTagName("button")[1].attachEvent("click",chongxinkaishi,true);
    //涓烘殏鍋滅晫闈㈢殑杩斿洖涓婚〉鎸夐挳娣诲姞浜嬩欢
    suspenddiv.getElementsByTagName("button")[2].attachEvent("click",jixu,true);
}
//鍒濆鍖栭殣钘忔湰鏂归鏈�
selfplan.imagenode.style.display="none";

/*
鏁屾満瀵硅薄鏁扮粍
 */
var enemys=[];

/*
瀛愬脊瀵硅薄鏁扮粍
 */
var bullets=[];
var mark=0;
var mark1=0;
var backgroundPositionY=0;
/*
寮€濮嬪嚱鏁�
 */
function start(){
    // mainDiv.style.backgroundPositionY=backgroundPositionY+"px";
    // backgroundPositionY+=0.5;
    if(backgroundPositionY==568){
        backgroundPositionY=0;
    }
    mark++;
    /*
    鍒涘缓鏁屾柟椋炴満
     */

    if(mark==20){
        mark1++;
        //涓鏈�
        if(mark1%5==0){
            enemys.push(new enemy(6,25,274,46,60,5000,360,random(1,3),"image/zfjbz.gif","image/exam3(1).png"));
        }
        //澶ч鏈�
        if(mark1==20){
            enemys.push(new enemy(12,57,210,110,164,30000,540,1,"image/dfjbz.gif","image/exam2(1).png"));
            mark1=0;
        }
        //灏忛鏈�
        else{
            enemys.push(new enemy(1,19,286,34,24,1000,360,random(1,4),"image/xfjbz.gif","image/exam1(1).png"));
        }
        mark=0;
    }

/*
绉诲姩鏁屾柟椋炴満
 */
    var enemyslen=enemys.length;
    for(var i=0;i<enemyslen;i++){
        if(enemys[i].planisdie!=true){
            enemys[i].planmove();
        }
/*
 濡傛灉鏁屾満瓒呭嚭杈圭晫,鍒犻櫎鏁屾満
 */
        if(enemys[i].imagenode.offsetTop>dH){
            mainDiv.removeChild(enemys[i].imagenode);
            enemys.splice(i,1);
            enemyslen--;
        }
        //褰撴晫鏈烘浜℃爣璁颁负true鏃讹紝缁忚繃涓€娈垫椂闂村悗娓呴櫎鏁屾満
        if(enemys[i].planisdie==true){
            enemys[i].plandietimes+=20;
            if(enemys[i].plandietimes==enemys[i].plandietime){
                mainDiv.removeChild(enemys[i].imagenode);
                enemys.splice(i,1);
                enemyslen--;
            }
        }
    }

/*
鍒涘缓瀛愬脊
*/
    if(mark%5==0){
            bullets.push(new oddbullet(parseInt(selfplan.imagenode.style.left)+31,parseInt(selfplan.imagenode.style.top)-10));
    }

/*
绉诲姩瀛愬脊
*/
    var bulletslen=bullets.length;
    for(var i=0;i<bulletslen;i++){
        bullets[i].bulletmove();
/*
濡傛灉瀛愬脊瓒呭嚭杈圭晫,鍒犻櫎瀛愬脊
*/
        if(bullets[i].bulletimage.offsetTop<0){
            mainDiv.removeChild(bullets[i].bulletimage);
            bullets.splice(i,1);
            bulletslen--;
        }
    }

/*
纰版挒鍒ゆ柇
*/
    for(var k=0;k<bulletslen;k++){
        for(var j=0;j<enemyslen;j++){
            //鍒ゆ柇纰版挒鏈柟椋炴満
            if(enemys[j].planisdie==false){
                if(enemys[j].imagenode.offsetLeft+enemys[j].plansizeX>=selfplan.imagenode.offsetLeft&&enemys[j].imagenode.offsetLeft<=selfplan.imagenode.offsetLeft+selfplan.plansizeX){
                  if(enemys[j].imagenode.offsetTop+enemys[j].plansizeY>=selfplan.imagenode.offsetTop+40&&enemys[j].imagenode.offsetTop<=selfplan.imagenode.offsetTop-20+selfplan.plansizeY){
                      //纰版挒鏈柟椋炴満锛屾父鎴忕粨鏉燂紝缁熻鍒嗘暟
                      selfplan.imagenode.src="image/bffjbz.gif";
                      enddiv.style.display="block";
                      planscore.innerHTML=scores;
                      if(document.removeEventListener){
                          mainDiv.removeEventListener("touchstart",yidong,true);
                          bodyobj.removeEventListener("touchstart",bianjie,true);
                      }
                      else if(document.detachEvent){
                          mainDiv.detachEvent("ontouchstart",yidong);
                          bodyobj.removeEventListener("touchstart",bianjie,true);
                      }
                      clearInterval(set);
                  }
                }
                //鍒ゆ柇瀛愬脊涓庢晫鏈虹鎾�
                if((bullets[k].bulletimage.offsetLeft+bullets[k].bulletsizeX>enemys[j].imagenode.offsetLeft)&&(bullets[k].bulletimage.offsetLeft<enemys[j].imagenode.offsetLeft+enemys[j].plansizeX)){
                    if(bullets[k].bulletimage.offsetTop<=enemys[j].imagenode.offsetTop+enemys[j].plansizeY&&bullets[k].bulletimage.offsetTop+bullets[k].bulletsizeY>=enemys[j].imagenode.offsetTop){
                        //鏁屾満琛€閲忓噺瀛愬脊鏀诲嚮鍔�
                        enemys[j].planhp=enemys[j].planhp-bullets[k].bulletattach;
                        //鏁屾満琛€閲忎负0锛屾晫鏈哄浘鐗囨崲涓虹垎鐐稿浘鐗囷紝姝讳骸鏍囪涓簍rue锛岃鍒�
                        if(enemys[j].planhp==0){
                            scores=scores+enemys[j].planscore;
                            scorelabel.innerHTML=scores;
                            enemys[j].imagenode.src=enemys[j].planboomimage;
                            enemys[j].planisdie=true;
                        }
                        //鍒犻櫎瀛愬脊
                        mainDiv.removeChild(bullets[k].bulletimage);
                            bullets.splice(k,1);
                            bulletslen--;
                            break;
                    }
                }
            }
        }
    }
}
/*
寮€濮嬫父鎴忔寜閽偣鍑讳簨浠�
 */
var set;
function begin(){

    startdiv.style.display="none";
    mainDiv.style.display="block";
    selfplan.imagenode.style.display="block";
    scorediv.style.display="block";
    /*
     璋冪敤寮€濮嬪嚱鏁�
     */
    set=setInterval(start,20);
}
//娓告垙缁撴潫鍚庣偣鍑荤户缁寜閽簨浠�
function jixu(){
location.reload();
}
//鏆傚仠鐣岄潰閲嶆柊寮€濮嬩簨浠�
function chongxinkaishi(){
    
   startdiv.style.display="none";
    maindiv.style.display="block";
}

/*
    瀹屾垚鐣岄潰鐨勫垵濮嬪寲
    鏁屾柟灏忛鏈轰竴涓�
    鎴戞柟椋炴満涓€涓�
 */