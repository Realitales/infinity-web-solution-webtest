const navbarbutton = document.querySelector(".navbar-hamburger-lines");
const navbarcontainer = document.querySelector(".navbarcontainer");
const bodycontainer = document.querySelector("body");

navbarbutton.addEventListener("click", ()=> {
    

    if(!navbarbutton.classList.contains("navbarbtn-active-state")){
        navbarbutton.classList.add("navbarbtn-active-state");
        navbarcontainer.classList.add("navbar-show-state");
        bodycontainer.classList.add("background-fx");
    }
    else{
        navbarbutton.classList.remove("navbarbtn-active-state");
        navbarcontainer.classList.remove("navbar-show-state");
        bodycontainer.classList.remove("background-fx");
    }
})
