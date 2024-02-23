const bottomNavbar = document.querySelector(".bottomNavbar")
const buttonMore = document.querySelector("#more")
const fixedNavbar = document.querySelector(".stickyHeader")
const container = document.getElementById("container")
let option = false;
let lastScroll = window.scrollY;

const OpenNav = () => {
    option = !option
    bottomNavbar.style.display = option? "block" : "none";
    buttonMore.textContent = option? "More -" : "More +";
}

document.addEventListener("scroll", ()=>{
    // fixedNavbar.style.top =  window.scrollY <= 70? "unset" : "0"
 

    if((window.scrollY > lastScroll) && window.scrollY > 100){
        fixedNavbar.style.top = "-75px"
    }else{
        fixedNavbar.style.position = window.scrollY <= 70? "absolute" : "fixed"
        fixedNavbar.style.top = window.scrollY <= 70? "unset" : "0"

    }

    lastScroll = window.scrollY

    console.log(window.scrollY)
})   


