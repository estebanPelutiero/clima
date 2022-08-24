let username;
const btnLogin = document.querySelector(".btn-ok");
const spanUsername = document.querySelector(".span");

function login(){

    username = document.querySelector(".input-user").value;

    const userData = {
        user: username,
    };
    
    sessionStorage.setItem("User Info", JSON.stringify(userData));
    
};

btnLogin.addEventListener("click", () => {
    login();
    spanUsername.innerText = JSON.parse(sessionStorage.getItem("User Info")).user; 
});