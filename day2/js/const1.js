//상수(Constant Variable)

let current_year =2023;
current_year =2022;

console.log(current_year);

// 상수 - 재할당 함수 없음
const MONTH =12;
// MONTH =13;

console.log("1년은" + MONTH +"달이 있습니다.");

//원의 넓이 계산하기
//circleArea = PI * radius * radius
const PI =3.14;
let radius = 4;
let circleArea;

// PI = 4.14;


//연산
circleArea = PI * radius * radius;

//출력
// document.write("원의 넓이 : " + circleArea);

//공의 속도를 변환하는 프로그램 작성
//km -> mile, 변환상수= 1.609, 1mile = 1.609km
//말 = 킬로미터 /1.609
let kph, mph;
//입력
const RATE_KPH_MPH =1.609;
kph = prompt("구속을 입력하세요(km/h)", "100")
kph = parseFloat(kph);


//연산
// kph = mph*1.609;
// mhp = kph/1.609;
mph = kph/RATE_KPH_MPH;

//출력 -자리수 설정 함수 : tofixed( 자리수 )
document.write ( kph+"km는"+ mph.toFixed(2) +"mile 입니다.");

