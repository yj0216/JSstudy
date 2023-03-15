const playerName = "yeojun";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//array 설명이 붙지 않으면 무엇인지 알 수 없음
const playerArray = ["nico",121212,false,"little bit"];

//object
const player = {
    name : "Yeojun",
    points : 121212,
    handsome : false,
    fat : "liitle bit"
};

console.log(playerArray);
console.log(player.name);
console.log(player["name"]);
//player = false //오류 완전히 종류가 바뀜
player.fat = "no";//const지만 값이 바뀜 이건 update 취급
console.log(player);
player.lastName = "Heo";
console.log(player);

const age = parseInt(prompt("나이?"));
console.log(isNaN(age));

if(isNaN(age)){
    console.log("숫자를 입력하시오");
}else if(age < 18){
    console.log("나이가 너무 어립니다.");
} else if(age>50){
    console.log("운동해야합니다.")
} else {
    console.log("마실 수 있습니다.");
}