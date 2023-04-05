const iconNum = ["#register-icon1","#register-icon2","#register-icon3","#register-icon4","#register-icon5"];
const idForm = document.querySelector(".register-form-first");
const idInput = document.querySelector(".register-input");
const id = idInput.querySelector("input");

function handleBlueBottom(){
    const span = document.querySelector(iconNum[0]);
    const inputBox = idInput;
    span.classList.add("border-bottom-blue");
    inputBox.classList.add("border-bottom-blue");
}

function handleRedBottom(){
    console.log("작동");
    const span = document.querySelector(iconNum[0]);
    const inputBox = idInput;
    span.classList.add("border-red-blue");
    inputBox.classList.add("border-red-blue");
}
id.addEventListener("click",handleBlueBottom)
id.addEventListener("click mouseout",handleRedBottom)
