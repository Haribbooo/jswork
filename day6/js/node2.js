 // p태그 생성
 function addP(){
   let newP =  document.createElement("p")
   let newText = document.createTextNode('숨겨진 텍스트입니다.')
   newP.appendChild(newText) // p태그에 내용추가 
   
  
   let div = document.getElementById('info')
   div.appendChild(newP)
   }