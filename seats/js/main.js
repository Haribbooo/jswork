//MAIN.JS.JS
//입장객 수에 따른 줄 수 계산
let customer ,colNum , rowNum

customer = prompt("입장객 수 입력");
colNum =prompt("좌석 열 수 입력: ");

if(customer % colNum ==0){
   rowNum =customer/colNum;
}else{
   rowNum =parseInt(customer /colNum) +1;
}

//중첩 for

document.write("<table>");
// 좌석 번호 배치
for(let i =0 ; i<rowNum; i++){  //열
   document.write("<tr>");
   for(let j = 1; j<=colNum; j++){ //행
      let seatNum = colNum * i + j;
      //좌석 번호가 고객수보다 크면 빠져나옴
      if(seatNum > customer)
         break;
      document.write("<td>좌석"+seatNum+"</td>");

   }
   document.write("</tr>");
}
document.write("</table>");
