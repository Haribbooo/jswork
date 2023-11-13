

//Date  객체 (현재 날짜와 시간)

const  Now = new Date();

document.write("현재 년도 : " + Now.getFullYear()+ '<br>');
document.write("현재 월 : " + (Now.getMonth() + 1)+ '<br>');
document.write("현재 일 : " + Now.getDate() + '<br>');

document.write("현재 시간 : " + Now.getHours() + '<br>');
document.write("현재 분 : " + Now.getMinutes() + '<br>');
document.write("현재 초 : " + Now.getSeconds() + '<br>');

//현재까지의 시간 측정 ( 1970.1.1 자정부터 밀리초로 반환)
document.write("현재 까지의 시간 : " + 
                  Now.getTime()/1000 + '<br>');

document.write("날(일)로 환산  : " +
                  Math.floor(Now.getTime()/(24*60*60*1000)) + '<br>');