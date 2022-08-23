let username;
let jsonUserData;
const btnLogin = document.querySelector(".btn-ok");
const spanUsername = document.querySelector(".span");

function login(){

    username = document.querySelector(".input-user").value;

    const userData = {
        user: username,
    };
    
    jsonUserData = JSON.stringify(userData);
    sessionStorage.setItem("User Info", jsonUserData);
    
};

btnLogin.addEventListener("click", () => {
    login();
    parseUser = JSON.parse(jsonUserData);
    console.log(parseUser);
    spanUsername.innerText = `${parseUser.user}!`; 
    
});