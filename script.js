const toggleMenu = document.querySelector(".toggleMenu input");
const headerMenu = document.querySelector("#headerMenu");
toggleMenu.addEventListener("click", function(){
    headerMenu.classList.toggle("navSlide");
});

let currentSlide = 0;

function updateCarousel(){
    const carousel = document.getElementById("imageContainer");
    const totalImages = carousel.children.length;
    const imageWidth = carousel.children[0].clientWidth + 10;
    const offset = currentSlide * imageWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
    const centerIndex = (currentSlide + 1) % totalImages;
    for (let i = 0; i < totalImages; i++){
        carousel.children[i].classList.remove("center");
    };
    carousel.children[centerIndex].classList.add("center");
};

function slideLeft(){
    const carousel = document.getElementById("imageContainer");
    const totalImages = carousel.children.length - 2;
    currentSlide = ((currentSlide - 1) + totalImages) % totalImages;
    updateCarousel();
    console.log(currentSlide);
};

function slideRight(){
    const carousel = document.getElementById("imageContainer");
    const totalImages = carousel.children.length - 2;
    currentSlide = ((currentSlide + 1) % totalImages);
    updateCarousel();
    console.log(currentSlide);
};

updateCarousel();