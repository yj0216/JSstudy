const loginForm = document.querySelector(".login-form1");
const id = loginForm.querySelector("#id");
const passwordForm = document.querySelector(".login-form2");
const password = passwordForm.querySelector("#password-input");

const loginbutton = document.querySelector("#login-button");
const passwordbutton = document.querySelector("#password-button");

const HIDDEN_CLASSNAME = "hidden";
function handleLoginSubmit(event){
    event.preventDefault();
    console.log(id.value);
    handleloginCheck();
}

function handlePasswordSubmit(event){
    event.preventDefault();
    console.log(password.value);
    handleloginCheck();
}

function handleloginCheck(){   
    if(id.value !== "" && password.value !== "")
    {
        console.log("로그인 성공");
        document.body.classList.add(HIDDEN_CLASSNAME);
    }else{
        console.log("로그인 실패");
    }
}

loginForm.addEventListener("submit",handleLoginSubmit);
passwordForm.addEventListener("submit",handlePasswordSubmit);
loginbutton.addEventListener("click",handleloginCheck);