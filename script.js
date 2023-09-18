let login = true;
function turnlogout(element){
        login = !login;
    if(login){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}

function deletethat(element){
    element.remove();
}
