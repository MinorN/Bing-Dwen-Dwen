const string=`#bingdundun{
    position: relative;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
}
#bingdundun>.body{
    position: absolute;
    top:76px;
    left:93px;
    width: 211px;
    height: 237px;
    border-radius: 91px 105px 74px 84px/128px 119px 129px 114px;
    background-color: #fff;
    border:4px solid #3a3a3a;
    z-index: 1;
}
#bingdundun>.earLeft{
    position: absolute;
    top:77px;
    left: 113px;
    width: 43px;
    height: 66px;
    transform: rotate(340deg);
    border-radius: 91px 52px 74px 84px/128px 68px 129px 114px;
    background-color: #3a3a3a;
}
#bingdundun>.earRight{
    position: absolute;
    top:77px;
    left: 243px;
    width: 43px;
    height: 66px;
    transform: rotate(195deg);
    border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;
    background-color: #3a3a3a;
}
#bingdundun>.face{
    position: absolute;
    top: 108px;
    left: 117px;
    width: 164px;
    height: 131px;
    border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;
    box-shadow: rgb(150, 191, 220) 0 0 0 3px,rgb(108, 76, 128) 0 0 0 5px,rgb(197, 185, 138) 0 0 0 7px,rgb(159, 194, 132) 0 0 0 9px;
    background-color:#fff; 
    z-index: 2;
}
#bingdundun>.eyeLeft{
    position: absolute;
    top:132px;
    left: 133px;
    width: 47px;
    height: 65px;
    border-radius: 69px 62px 69px 69px/97px 93px 97px 97px;
    transform: rotate(45deg);
    background-color: #3a3a3a;
    z-index: 3;
}
#bingdundun>.eyeLeft::before{
    content: '';
    position: absolute;
    top:13px;
    left: 15px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 5px solid #fff;
    background-color: rgb(60,60,57);
    z-index:4;
    box-sizing: border-box;
}
#bingdundun>.eyeLeft::after{
    content: '';
    position: absolute;
    top:18px;
    left:25px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 5;
}
#bingdundun>.eyeRight{
   left:218px;
   transform: rotate(-45deg);
}
#bingdundun>.eyeRight::before{
    top:10px;
    left:9px;
}
#bingdundun>.eyeRight::after{
    top:15px;
    left:16px;
}
#bingdundun>.nose{
    position: absolute;
    top:175px;
    left:188px;
    width: 25px;
    height: 14px;
    transform: rotate(180deg);
    z-index: 6;
    overflow: hidden;
}
#bingdundun>.nose::after{
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    top:-1px;
    left: 0;
    transform-origin: top left;
    background-color: #3a3a3a;
    border-radius: 6px 9px 9px 16px/6px 8px 6px 6px;
    transform: rotate(45deg) translate3d(50%,-50%,0);
    box-sizing: border-box;
}
#bingdundun>.mouth{
    position: absolute;
    top:192px;
    left: 176px;
    width: 50px;
    height: 35px;
    border-radius: 50% 48% 60%/48% 45%;
    transform: rotate(-1deg);
    background-color: #3a3a3a;
    z-index: 5;
}
#bingdundun>.mouth::before{
    content: '';
    position: absolute;
    top:-12px;
    left: 4px;
    width: 35px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
}
#bingdundun>.mouth::after{
    content: '';
    position: absolute;
    bottom: 3px;
    left: 7px;
    width: 36px;
    height: 13px;
    background-color: #a33232;
    border-radius: 50% 48% 80% 80%/68% 45% 80% 60%;
}
#bingdundun>.handLeft{
    position: absolute;
    top:203px;
    left: 83px;
    width: 40px;
    height: 70px;
    background-color: #3a3a3a;
    transform: rotate(30deg);
}
#bingdundun>.handLeft::after{
    content: '';
    position: absolute;
    bottom: -22px;
    left: 0;
    width: 41px;
    height: 40px;
    background-color: #3a3a3a;
    border-radius: 50%;
}
#bingdundun>.handRight{
    position: absolute;
    top:160px;
    left: 270px;
    width: 40px;
    height: 70px;
    background-color: #3a3a3a;
    transform: rotate(40deg);
    border-radius: 44px 0 80px/100px 30px 100px;
    transform-origin: bottom center;
}
#bingdundun>.handRight::after{
    content: '❤';
    position: absolute;
    top:-14px;
    left: 5px;
    width: 35px;
    height: 35px;
    font-size: 20px;
    color:#9f3432;
    text-align: center;
    letter-spacing: -2px;
    border-radius: 40px 40px 55px/100px 100px 0;
    transform: rotate(-55deg);
    transform-origin: center;
}
#bingdundun>.footLeft{
    position: absolute;
    top:310px;
    left: 142px;
    width: 40px;
    height: 40px;
    background-color: #3a3a3a;
    border-radius: 0 50px/0 18px 0 0;
    z-index:8;
}
#bingdundun>.footLeft::before{
    content: '';
    position: absolute;
    bottom: -14px;
    left: 0;
    width: 42px;
    height: 20px;
    background-color: #3a3a3a;
    border-radius: 0 14px 4px;
}
#bingdundun>.footRight{
    left:220px;
    transform: rotateY(180deg);
}
`
const demo =document.querySelector('#demo')
const demo2 =document.querySelector('#demo2')

const player={
    id:undefined,
    n:1,
    time:100,
    init:()=>{
        demo.innerText = string.substring(0,player.n)
        demo2.innerHTML = string.substring(0,player.n)
        player.play()
        player.bindEvents()
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast',
    },
    bindEvents:()=>{ 
        for(let key in player.events){
            if(player.events.hasOwnProperty){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            } 
        }
    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(id)
            return
        }
        demo.innerText = string.substring(0,player.n)
        demo2.innerHTML = string.substring(0,player.n)
        demo.scrollTop=demo.scrollHeight
    },
    play :()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.time = 300
        player.pause()
        player.play()
    },
    normal:()=>{
        player.time = 100
        player.pause()
        player.play()
    },
    fast:()=>{
        player.time = 0
        player.pause()
        player.play()
    },
};

player.init()

