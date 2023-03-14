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
console.log(document.querySelector("h1"));
console.log(document.querySelector("p"));
console.log(document.querySelector("#text"));
console.log(document.querySelector(".paragraph"));
console.log(document.getElementById("text"));
const h1 = document.querySelector("h1");
//textContent = 노드가 포함하고 있는 내용 
console.log(h1.textContent);
h1.textContent="헬로우";

console.log('1' == 1);//true 타입구분 안함

console.log('1' === 1);//false 타입구분까지 함


function sayHello(){
    console.log("hello");

    return 123;
};//표현식

const sayBye = function(){
    console.log("bye");
    confirm("확인");

    return "df";
}//선언식

console.log(sayBye());
//함수 내부에서 선언된 변수는 밖에서 사용할 수 없음

//event = 시스탬 내에서 일어나는 사건
const inputType = document.querySelector("#typing");
const inputClick = document.querySelector("#push");

const handleTyping = function(){
    console.log("타이핑 되고 있음");
}
const handleClick = function(){
    console.log("클릭되고 있음");
}

inputType.onkeydown = handleTyping;//이벤트를 더 추가할 수 없음
inputClick.onclick = handleClick; 


const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

const handleClick1 = function(event){
    console.log(event.target);
}

btn1.addEventListener('click',handleClick1);
btn1.addEventListener('click',function(){
    console.log("추가됬음");
});//이벤트를 계속 추가 할 수 있음
btn1.removeEventListener('click',handleClick);//등록된 이벤트 삭제

