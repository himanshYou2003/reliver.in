// function init(){

// gsap.registerPlugin(ScrollTrigger);


// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//       getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });



// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

// }
// init();

// function cur(){
//   document.addEventListener("mousemove",function(dets){
//     gsap.to(".cur",{
//         left:dets.x,
//         top:dets.y
//     })
    
//   })
// }
// cur();


// var crsr = document.querySelector(".cur")
// var main = document.querySelector(".main")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + 20+"px"
//     crsr.style.top = dets.y + 20+"px"
// })


// var t1 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".page1 h1",
//         scroller:".main",
//         // markers:true,
//         start:"top 30%",
//         end:"top 0",
//         scrub:2
//     }
// });

// t1.from(".page1 h1",{
//     x:-100,
// },"anim")

// t1.from(".page1 h2",{
//     x:100,
// },"anim")

// t1.to(".page1 video",{
//     // scale:1.7
//     width:"90%"
// },"anim")

// var t2 = gsap.timeline({
//   scrollTrigger:{
//       trigger:".page1 h1",
//       scroller:".main",
//       // markers:true,
//       start:"top -120%",
//       end:"top -130%",
//       scrub:2
//   }
// });

// t2.to(".main",{
//   backgroundColor:"white"
// })


// var tl3 = gsap.timeline({
//   scrollTrigger:{
//       trigger:".page1 h1",
//       scroller:".main",
//       // markers:true,
//       start:"top -280%",
//       end:"top -200%",
//       scrub:2
//   }
// });

// tl3.to(".main",{
//   backgroundColor:"#0F0D0D"
// })

// // var crsr=document.querySelector(".cur")
// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         var att = elem.getAttribute("data-img")
//         crsr.style.width = "470px"
//         crsr.style.height = "370px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
//     })
//     elem.addEventListener("mouseleave",function(){
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })


// var purp = document.querySelector(".purple")
// var h4 = document.querySelectorAll(".nav h4");
// var nav = document.querySelector(".nav");
// h4.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     purp.style.display = "block"
//     purp.style.opacity = "1"
//   })
//   nav.addEventListener("mouseleave",function(){
//     purp.style.display = "none"
//     purp.style.opacity = "0"
//   })
// })



// --------------------------------------------------------------------------------

// gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray('.animate').forEach((element) => {
//     gsap.from(element, {
//       opacity: 0,
//       y: 50,
//       scrollTrigger: {
//         trigger: element,
//         start: "top -300%", // Adjust as needed
//         end: "top -400%", // Adjust as needed
//         toggleActions: "play none none none",
//         markers: true // For debugging, can be removed
//       }
//     });
//   });


// ----------------------------------------------------------------SONG-------------------------------


var mysong =document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function() {
  if(mysong.paused){
    mysong.play();
  }else{
    mysong.pause();
  }
}
        //AUDIO
var text =document.getElementById('text')       
var mysong = document.getElementById("mysong"); // Corrected the case
var icon = document.getElementById("icon");
icon.onclick = function () {
if (mysong.paused) {
    mysong.play();
    text.innerText = 'on';
} else {
    mysong.pause();
    icon.src = "";
    text.innerText = 'off';
}
};
// Get the audio element
var audio = document.querySelector('audio');

// Set the volume (0.5 means 50% volume)
audio.volume = 0.8;
