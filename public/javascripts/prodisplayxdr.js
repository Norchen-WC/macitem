window.onload = function(){
 var run = document.getElementById("img2");
 var speed = 0.1;
 var timer = null;
 var alpha=0;
if(alpha==0){
  startrun(100);
 }
if(alpha==100){
  startrun(0);
 }
 function startrun(target){
  clearInterval(timer);
  timer = setInterval(function(){
   if(target > alpha){
    speed = 0.5;
   }else{
    speed = -0.5;
   }
   if(alpha == target){
    clearInterval(timer);
   }
   else{
    alpha = alpha + speed;
    run.style.filter = 'alpha(opacity='+alpha+')';
    run.style.opacity = alpha/100;
   }
  },0)
 }

 }