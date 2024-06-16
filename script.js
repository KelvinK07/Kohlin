const toggleMenu = document.querySelector(".toggleMenu input");
const headerMenu = document.querySelector("#headerMenu");
toggleMenu.addEventListener("click", function(){
    headerMenu.classList.toggle("navSlide");
});