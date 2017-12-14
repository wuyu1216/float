/*
window.onload =function () {
  let box = document.querySelector('.box');
  let speedy=10;
  let speedx=10;
  let maxH = window.innerHeight-box.offsetHeight;
  let maxW = window.innerWidth-box.offsetWidth;
  setInterval(move,50);
  function move() {
      let tops = box.offsetTop + speedy ;
      let lefts = box.offsetLeft +speedx;
      if(tops>=maxH){
          tops=maxH;
          speedy*=-1;
      }
      if(tops<=0){
          tops=0;
          speedy*=-1;
      }
      if(lefts>=maxW){
          lefts=maxW;
          speedx*=-1;
      }
      if(lefts<=0){
          lefts=0;
          speedx*=-1;
      }

      box.style.top=tops+'px';
      box.style.left=lefts+'px';
  }
};*/



class Float{
    constructor(obj){
        // 属性
        this.obj=obj;
        this.speedy=10;
        this.speedx=10;
        this.maxH=window.innerHeight-this.obj.offsetHeight;
        this.maxW=window.innerWidth-this.obj.offsetWidth;
    }
        // 方法
    start(){
        this.move();
    }
    move(){
        let _this=this;
        this.t=setInterval(function () {
            let tops = _this.obj.offsetTop + _this.speedy;
            let lefts = _this.obj.offsetLeft + _this.speedx;
            if(tops>=_this.maxH){
                    tops=_this.maxH;
                    _this.speedy*=-1;
            }
            if(tops<=0){
                    tops=0;
                    _this.speedy*=-1;
            }
            if(lefts>=_this.maxW){
                lefts=_this.maxW;
                _this.speedx*=-1;
            }
            if(lefts<=0){
                lefts=0;
                _this.speedx*=-1;
            }
            _this.obj.style.top=tops+'px';
            _this.obj.style.left=lefts+'px';
        },50)
    }
    stop(){
        clearInterval(this.t);
    }
    resize(){
        this.maxH=window.innerHeight-this.obj.offsetHeight;
        this.maxW=window.innerWidth-this.obj.offsetWidth;
    }
}