//시계 생성

setInterval(myWatch,1000);

function myWatch() {
   const now = new Date();
   let time = now.toLocaleTimeString();
   console.log(time);


   let watch = document.getElementById("show")
   watch.innerHTML = time;
   watch.style.color ="blue";
 
}

