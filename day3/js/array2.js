// array 객체를 사용한 배열
let num = new Array();
console.log(num);
console.log(num.length+"개");

//ㅈ 지정 (입력)
num[0] =10;
num[1] =20;
num[2] =30;

console.log(num);

console.log(num[0]);

//전체 요소 출력
for(let i = 0; i < num.length;i++){
   console.log(num[i]);
}

//for in 문 사용 
/*for (let 변수 in 배열이름){
   console.log(배열이름[변수]);
}*/
console.log("for~ in 문 검색")
for(let n in num){
   console.log(num[n]);
}

console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum =0;
for(let i =0; i<num.length; i++){
   // sum= sum+num[i];
   sum += num[i]; //누적합계
}
avg = sum/num.length;
console.log(sum);
console.log(avg);