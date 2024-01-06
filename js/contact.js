let navLinks =Array.from( document.querySelectorAll(".nav-link"));
for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener("click",function(){
            let active =document.querySelector(".active");
            active.classList.remove("active");
            navLinks[i].classList.add("active");
})
}