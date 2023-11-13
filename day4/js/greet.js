
//2초 간격으로 인사말이 변경되게 하기
//콜백함수 기능 사용 
//배열의 인덱스가 1증가하면 인사말이 바뀜
window.onload = function(){//윈도우계통의 함수가 있으면 <script src> 를 head 위로 올림
   let message = ["오늘도 좋은 하루!","행운을 빕니다!","잘 지내니?"];

   let msgIdx=0;

   myGreeting();

   function myGreeting(){
      let msg = document.getElementById("demo")
      msg.innerHTML = message[msgIdx];
      msg.style.color = "blue";
      msgIdx++;
      if(msgIdx ==message.length){
         msgIdx=0;
      }
      setTimeout(myGreeting,2000)//myGreeting. () 호출

   }
}

