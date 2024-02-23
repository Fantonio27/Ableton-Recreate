const bottomNavbar = document.querySelector(".bottomNavbar")
const buttonMore = document.querySelector("#more")
const fixedNavbar = document.querySelector(".stickyHeader")
const ytVideo = document.getElementById("youtubeVideo")
const videoImageBg = document.querySelector(".imageVideoBg")
const videoPlayButton = document.querySelector(".circle")

let option = false;
let lastScroll = window.scrollY;

const OpenNav = () => {
    option = !option
    bottomNavbar.style.display = option? "block" : "none";
    buttonMore.textContent = option? "More -" : "More +";
}

document.addEventListener("scroll", ()=>{
    let up = option? 430: 70
    let down = option? 450: 100

    if((window.scrollY > lastScroll) && window.scrollY > down){
        fixedNavbar.style.top = "-75px"
    }else{
        fixedNavbar.style.position = window.scrollY <= up? "absolute" : "fixed"
        fixedNavbar.style.top = window.scrollY <= up? "unset" : "0"
    }

    lastScroll = window.scrollY
})  

const playVideo = () => {
    videoImageBg.style.display = "none"
    videoPlayButton.style.display = "none"
    ytVideo.style.display = "block"

    ytVideo.src += "?&autoplay=1"
}


