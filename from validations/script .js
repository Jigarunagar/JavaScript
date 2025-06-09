const getValue = (id) => {
    return document.getElementById(id).value;
};

const handleUserData = (e) => {
    e.preventDefault();
    let nameRegex = /^[a-zA-Z\-]+$/;
    let passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

    let username = getValue("username");
    let email = getValue("email");
    let password = getValue("password");
    let number = getValue("number");
    
    if (nameRegex.test(username)) {
        document.getElementById("username").setAttribute("class", "passed");
    } else {
        document.getElementById("username").setAttribute("class", "err");
    }
    if (passwordRegex.test(password)) {
        document.getElementById("password").setAttribute("class", "passed");
    } else {
        document.getElementById("password").setAttribute("class", "err");
    }
};

document.getElementById("userData").addEventListener("submit", handleUserData);