
//write() -> getElementsById()
function calcAge(){
   // 조건- 현재 연도는 상수로 선언할 것
   // 나이 - 현재연도- 태어난 해
   const CURRENT_YEAR= 2023;
   let birthYear,age;
   
   //입력
   birthYear =prompt("태어난 연도를 입력하세요","YYYY");

   if(birthYear == null){
      document.getElementById("print").innerHTML="입력이 취소되었습니다.";        
   }else if(isNaN(birthYear)){        
      document.getElementById("print").innerHTML="숫자를 입력해주세요.";
   }else{
      birthYear =parseInt(birthYear);
      //계산
      age = CURRENT_YEAR - birthYear;

      document.write(CURRENT_YEAR + "년 현재<br>" + birthYear
            +"년에 태어난 사람의 나이는"+age+"세입니다.");
   }
}