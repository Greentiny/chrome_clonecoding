

//const age=prompt("How old are you?");
//console.log(age,  parseInt(age));

//const age=parseInt(prompt("How old are you?"));
//console.log (age);

//const age=parseInt(prompt("How old are you?"));
//console.log (isNaN(age));

// if(isNaN(age)){
//     //condition==true
//     console.log("Please write a number")
// }else{
//     //condition==false
// }

// const age=parseInt(prompt("How old are you?"));

// if(isNaN(age) || age<0){
//     console.log("Please write a real positive number");

// }else if(age<18){
//     console.log("You are too young")
// }else if(age>=18&&age<=50){
//     console.log("You can drink");
// }else if((age>50&& age<=80)){
//     console.log("you shoud exercise")
// }else if(age==100){
//     console.log("wow your wise");
// }else if(age>80){
//     console.log("You can do whatever you want");
// }





// const title=document.getElementById("title");
// console.dir(title);

// title.innerText="Got you!"
// console.log(title.id);
// console.log(title.className)

// const title=document.querySelector(".hello:first-child h1");
// // title.style.color="blue";
// // console.log(title);

// const h1=document.querySelector(".hello:first-child h1");
// function handleTitleClick(){
//     // console.log("title was clicked")
//     h1.style.color="blue";
// }
// function handleMouseEnter(){
//     h1.innerText="Mouse is here!"
// }
// function handleMouseLeave(){
//     h1.innerText="Mouse is gone"
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor="tomato";
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }
// function handWindowOnline(){
//     alert("ALL GO!")

// }
// h1.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter)
// h1.addEventListener("mouseleave",handleMouseLeave)
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("outline",handleWindowOffline);
// window.addEventListener("online",handWindowOnline);

// const h1=document.querySelector(".hello:first-child h1");
// function handleTitleClick(){
//     const currentColor=h1.style.color;
//     let newColor;
//         if(currentColor=="blue"){
//         newColor="tomato";
//     }else{
//         newColor="blue";
//     }
//     h1.style.color=newColor;
// }
// h1.addEventListener("click", handleTitleClick);

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const clickedClass="clicked";
//    if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//    }else{
//     h1.classList.add(clickedClass);
// }
// }
// h1.addEventListener("click", handleTitleClick);

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//   h1.classList.toggle("clicked");
// }
// h1.addEventListener("click", handleTitleClick);


const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);//처음에는 form을 보여줬다가 유저가 submit하고 나서 다시 숨김
    const username=loginInput.value;//input의 값을 변수로 저장
    localStorage.setItem(USERNAME_KEY,username);//localStorage에 username 저장
    paintGreetings(username);
   
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username} ;)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);//greeting만 보이게
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername==null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);//loginForm만 보이게
    loginForm.addEventListener("submit",onLoginSubmit);//form의 submit을 기다리고 onLoginSubmit 함수 호출

}else{
    paintGreetings(savedUsername);
    

}
