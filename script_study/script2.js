// const playerName = "yeojun";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// //array 설명이 붙지 않으면 무엇인지 알 수 없음
// const playerArray = ["nico",121212,false,"little bit"];

// //object
// const player = {
//     name : "Yeojun",
//     points : 121212,
//     handsome : false,
//     fat : "liitle bit"
// };

// console.log(playerArray);
// console.log(player.name);
// console.log(player["name"]);
// //player = false //오류 완전히 종류가 바뀜
// player.fat = "no";//const지만 값이 바뀜 이건 update 취급
// console.log(player);
// player.lastName = "Heo";
// console.log(player);

// const age = parseInt(prompt("나이?"));
// console.log(isNaN(age));

// if(isNaN(age) || age < 0){
//     console.log("양수를 입력하시오");
// }else if(age < 18){
//     console.log("나이가 너무 어립니다.");
// } else if(age>50){
//     console.log("운동해야합니다.")
// } else {
//     console.log("마실 수 있습니다.");
// }

//document도 object임
// document.title = "Hello! From JS!"

// const title = document.getElementsByTagName("h1");
// const title2 = document.querySelector(".hello h1");//css처럼 지정 가능
// const title3 = document.querySelector("#title h1");
// title3.innerText = "바뀜"; 
// title3.style.color = "blue";
// console.log(title);
// console.log(title2);


// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue")
//     {
//         newColor ="tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// };

// function handleMouseEnter(){
//     h1.innerText = "Mouse 올리지마!";
//     console.log("mouse 올림!");
// };
// function handleMouseLeave(){
//     h1.innerText = "Mouse 내리지마!"
//     console.log("mouse 내림!");
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copy?");
// }
// function handleWindowOffline(){
//     alert("no WIFI");
// }
// function handleWindowOnline(){
//     alert("online!");
// }

// 쓸 수는 있지만 addEventListener가 더 나음
// h1.onclick = handleTitleClick;

//함수()면 바로 실행 됨 () 실행 버튼 느낌
// 제목을 클릭할때 이 함수를 찾아 실행시켜줌
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);


// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);

//const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
    
//     const clickedClass = "clicked";

//     //class 확인 후 있으면 없에고 없으면 추가
//     h1.classList.toggle("clicked");


//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // } else{
//     //     h1.classList.add(clickedClass);
//     // }//toggle
// }

// h1.addEventListener("click",handleTitleClick);