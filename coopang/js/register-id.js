const iconNum = "#register-icon1";
const idForm = document.querySelector(".register-form-first");
const idInput = document.querySelector(".register-input");
const id = idInput.querySelector("input");
const BORDER_BOTTOM_RED = "border-bottom-red";
const BORDER_BOTTOM_BLUE = "border-bottom-blue";
const INPUT_SUCCESS = "input-success"; 
const ADD_MESSAGE = "add-message";


function handleBlueBottom(){
        const warningDiv = idForm.querySelector("div");
        const span = document.querySelector(iconNum);
        const inputBox = idInput;
        if(warningDiv)idForm.removeChild(warningDiv);
        span.classList.add(BORDER_BOTTOM_BLUE);
        inputBox.classList.add(BORDER_BOTTOM_BLUE);      
        document.addEventListener("click",handlefailBottom);
}

function handlefailBottom(event){
    console.log("작동");
    const warningDiv = idForm.querySelector("div");
    if(id.value.length > 8)
    {
        if(warningDiv)warningDiv.removeChild(warningDiv);
        handleSuccessBottom();
    }else if(event.target !== id && idForm.childElementCount === 2)
    {
            const div2 = document.createElement("div");
            const warningMessage = document.createElement("div");
            const span = document.querySelector(iconNum);
            const inputBox = idInput;
            const input = id;
            warningMessage.innerText = "이메일을 입력하세요";
            warningMessage.classList.add(ADD_MESSAGE);
            span.classList.remove(BORDER_BOTTOM_BLUE);
            inputBox.classList.remove(BORDER_BOTTOM_BLUE);
            input.classList.remove(INPUT_SUCCESS);
            span.classList.add(BORDER_BOTTOM_RED);
            inputBox.classList.add(BORDER_BOTTOM_RED);
            div2.appendChild(warningMessage);
            idForm.appendChild(div2);            
    }
}
function handleSuccessBottom(){
        const warningMessage = idForm.querySelector(".add-message");
        const inputBox = id;
        if(warningMessage)idForm.removeChild(warningMessage);
        inputBox.classList.add(INPUT_SUCCESS);      
}

id.addEventListener("click",handleBlueBottom);
