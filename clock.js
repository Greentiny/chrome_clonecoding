const clock=document.querySelector("#clock");
 function getClock(){
    const date=new Date();//현개 Date를 가져와줌
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
 }
//  setInterval(sayHello,5000);
getClock();
setInterval(getClock,1000);

