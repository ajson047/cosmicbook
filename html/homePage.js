//active eheader sticky 
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
        header.classList.toggle("sticky".window.scrolly>50)
})


//active scroll menu

const liLink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLength =section.length;
    while(--secLength && window.scrollyy +500<section[secLength].offsetTop){}
    liLink.forEach(sec=>sec.ckassList.remove("active"));
    liLink[secLength].classList.add("active");
}