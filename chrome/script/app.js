const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const greating = document.querySelector("#greating");
const HIDDEN_CLASSNAME = "hidden";
function handleLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greating.innerText = `Hello ${username}`;
    greating.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",handleLoginSubmit);
