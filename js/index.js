FastClick.attach(document.body);
!function(desW){
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/desW*100+"px";
}(640)
var mySwiper=new Swiper(".swiper-container",{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd:function(swiper){
       var slideAry=swiper.slides;//一共有多少活动快
        var curIn=swiper.activeIndex;//当前索引
        var total=slideAry.length;
      //  console.log(slideAry,curIn);//
        var targerId='page';
        switch (curIn){
            case 0:
                targerId+=curIn-2;
                break;
            case total-1:
                targerId+=1;
                break;
            default:
                targerId+=curIn;
                break;
        }
        [].forEach.call(slideAry,function(item,index){
            if(curIn==index){
                item.id=targerId;
                return;
            }
            item.id=null;
        })
    }
});
!function(){
    var musicMenu=document.getElementById("musicMenu"),
        musicAudio=document.getElementById('musicAudio');
    musicMenu.addEventListener('click',function(){
        if(musicAudio.paused){
            musicAudio.play();
            musicMenu.className="music move";
            return;
        }
        musicAudio.pause();
        musicMenu.className="music";
    })
    function  controlMusic(){
        musicAudio.volume=0.05;
        musicAudio.play();
        musicAudio.addEventListener('canplay',function(){
            musicMenu.style.display="block";
            musicMenu.className="music move";
        },false);

    }
    window.setTimeout(controlMusic,1000)
}()