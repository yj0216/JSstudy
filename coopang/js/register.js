const iconNum = ["#register-icon1","#register-icon2","#register-icon3","#register-icon4","#register-icon5"];
const idForm = document.querySelector(".register-form-first");
const idInput = document.querySelector(".register-input");
const id = idInput.querySelector("input");
const BORDER_BOTTOM_RED = "border-bottom-red";
const BORDER_BOTTOM_BLUE = "border-bottom-blue";
const ADD_MESSAGE = "add-message";


function handleBlueBottom(){
        const warningMessage = idForm.querySelector(".add-message");
        const span = document.querySelector(iconNum[0]);
        const inputBox = idInput;
        if(warningMessage)idForm.removeChild(warningMessage);
        span.classList.add(BORDER_BOTTOM_BLUE);
        inputBox.classList.add(BORDER_BOTTOM_BLUE);      
        document.addEventListener("click",handleRedBottom);
}

function handleRedBottom(event){
    console.log("작동");
    const warningMessage = idForm.querySelector(".add-message");
    if(id.value.length > 8)
    {
        if(warningMessage)idForm.removeChild(warningMessage);
        handleBlueBottom();
    }else if(event.target !== id && idForm.childElementCount === 2)
    {
            const warningMessage = document.createElement("div");
            const span = document.querySelector(iconNum[0]);
            const inputBox = idInput;
            warningMessage.innerText = "이메일을 입력하세요";
            warningMessage.classList.add(ADD_MESSAGE);
            span.classList.remove(BORDER_BOTTOM_BLUE);
            inputBox.classList.remove(BORDER_BOTTOM_BLUE);
            span.classList.add(BORDER_BOTTOM_RED);
            inputBox.classList.add(BORDER_BOTTOM_RED);
            idForm.appendChild(warningMessage);            
    }

}
id.addEventListener("click",handleBlueBottom);
