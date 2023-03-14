// window.alert("허용되지 않은 값");
//주석이요
// console.log("로그요");
// console.log("하나 더 요");
// console.clear("지우개 의미 없는 글자요");
// console.log(20);
// console.log(1.2);
// console.log(10+7865.5);

// let first
// first = "ddd";//변수(바꿔도 됨)
// let first2 = 13;
// const twice = "dfa";//상수(이후 값을 바꿀 수 없음)
// const twice2 = 12;

// console.log(first);
// console.log(first2);
// console.log (twice);
// console.log(twice2);

// const snf = prompt("입력값 적어요");
// console.log(snf); 

// const str = `조금더 신기한 입력받기 ${45454} ${prompt("적어보라요")}`;//문자열 취급
// console.log(str);

// //0 = 0,Null = 값이 없다,undefined = 아직 정의 되지 않은 값
// let data;
// console.log(data);

// data = "hello";
// console.log(data);

// data = null;
// console.log(data);

// let value;
// value = true;//boolean

//요소 선택 가능(존재하지 않는 요소일시 NULL반환)
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("p"));
// console.log(document.querySelector("#text"));
// console.log(document.querySelector(".paragraph"));
// console.log(document.getElementById("text"));
// const h1 = document.querySelector("h1");
// //textContent = 노드가 포함하고 있는 내용 
// console.log(h1.textContent);
// h1.textContent="헬로우";

// console.log('1' == 1);//true 타입구분 안함

// console.log('1' === 1);//false 타입구분까지 함


// function sayHello(){
//     console.log("hello");

//     return 123;
// };//표현식

// const sayBye = function(){
//     console.log("bye");
//     confirm("확인");

//     return "df";
// }//선언식

// console.log(sayBye());
// //함수 내부에서 선언된 변수는 밖에서 사용할 수 없음

// //event = 시스탬 내에서 일어나는 사건
// const inputType = document.querySelector("#typing");
// const inputClick = document.querySelector("#push");

// const handleTyping = function(){
//     console.log("타이핑 되고 있음");
// }
// const handleClick = function(){
//     console.log("클릭되고 있음");
// }

// inputType.onkeydown = handleTyping;//이벤트를 더 추가할 수 없음
// inputClick.onclick = handleClick; 


// const btn1 = document.getElementById("one");
// const btn2 = document.getElementById("two");
// const btn3 = document.getElementById("three");

// const handleClick1 = function(event){
//     console.log(event.target);
// }

// btn1.addEventListener('click',handleClick1);
// btn1.addEventListener('click',function(){
//     console.log("추가됬음");
// });//이벤트를 계속 추가 할 수 있음
// btn1.removeEventListener('click',handleClick);//등록된 이벤트 삭제

// const button = document.getElementById("push");
// const div = document.getElementById("area");

// button.addEventListener('click',function(){
//     console.log("div생성");
//     document.createElement("div");//하위 요소에 div 추가
//     const newDiv = document.createElement("div");
//     newDiv.style.backgroundColor = "red";
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
//     div.appendChild(newDiv);//값 반환
// });


// const textInput = document.getElementById("text");
// const button = document.getElementById("button");

// button.addEventListener("click",function(){
//     textInput.value = "바껴라"
//     console.log(textInput.value);
// });


// const form = document.querySelector("form");

// form.addEventListener("submit",function(e){//sumit시 action 속성의 url로 감
//     e.preventDefault();//기본기능 차단
//     console.log(form.name.value);
//     console.log(form.town.value);
// });

// const button = document.querySelector("button");
// let interId;
// setTimeout(function(){
//     console.log(1234);
// },500);//인자 값 만큼 기다리다가 실행

// interId = setInterval(function(){
//     console.log("Hello");
// },1000);//인자 값 만큼 기다리다가 실행을 계속 반복
// console.log(interId);
// button.addEventListener('click',function(){
//     clearInterval(interId);//타이머를 멈출 수 있음
// })

// const h1 = document.querySelector('h1');
// const addBtn = document.querySelector('#add');
// const removeBtn = document.querySelector('#remove');
// const toggleBtn = document.querySelector('#toggle');

// addBtn.addEventListener('click',function(){
//     h1.classList.add('text')//class 추가 
// })
// removeBtn.addEventListener('click',function(){
//     h1.classList.remove('text');
// })
// toggleBtn.addEventListener('click',function(){
//     h1.classList.toggle('text');
// })
// console.log(h1.classList)


// const myName = "유노";

// console.log(myName);

// localStorage.setItem("myname",myName);//로컬 스토리지(웹 저장소)에 보관해 영구적으로 데이터를 보관함

localStorage.setItem("cat","고양이");
localStorage.setItem("cat","고양이");//중복이름은 안되기 때문에 뒤에 값으로 덮어 씌워짐
localStorage.removeItem("cat");//로컬 스토리지 값 삭제
//localStorage.clear();//모든 로컬 스토리지 값 삭제