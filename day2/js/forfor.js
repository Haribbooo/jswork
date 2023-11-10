

// for(let i =0 ; i<= 5; i++){
//    for(let j = 0; j<=5; j++){
//       document.write("$");
//    }
//    document.write("<br>");
// }
// document.write("<br>");
// //구구단
// for(let i =0 ; i<= 9; i++){
//    for(let j = 0; j<=9; j++){
//       document.write(i+"x" + j + "="+(i*j)+"<br>");
//    }
//    document.write("<br>");
// }

// for(let i =0 ; i<= 5; i++){
//    for(let j = 0; j<=i; j++){
//       document.write("$");
//    }
//    document.write("<br>");
// }
// document.write("<br>");
// for(let i =0 ; i<= 5; i++){
//    for(let j = 0; j<=6-i; j++){
//       document.write("$");
//    }
//    document.write("<br>");
// }


for(let i =0 ; i<4; i++){  //열
   for(let j = 1; j<=5; j++){ //행
      document.write(5*i+j);
   }
   document.write("<br>");
}