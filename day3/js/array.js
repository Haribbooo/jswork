
//순서가 0번부터 시작함
let animal = []; //빈 배열 생성
console.log(animal);
console.log(animal.length + "개");

//입력(저장)
animal[0] ='cow';
animal[1] ="pig";
animal[2] ="horse";
console.log(animal);

//특정요소(값)을 조회(검색)
console.log(animal[1]);

//수정(변경)
animal[2] ="dog";

//삭제


//전체 요소(값) 조회(목록)
//0번 인덱스부터 시작하고 배열의 값이 미만일 것.
for(let i = 0; i < animal.length;i++){
   document.write(animal[i]+" ");
}
