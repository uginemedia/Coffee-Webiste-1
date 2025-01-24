const header = document.querySelector("header");
const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    header.classList.add("token");
    nav.classList.add("token");
  } else {
    header.classList.remove("token");
    nav.classList.remove("token");
  }
});

let currentIndex = 0;
const testimonalContainer = document.querySelector(".testimonal-slide");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

// Function to update active slide
const updateSlider = (index) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  testimonalContainer.style.transform = `translateX(-${index * 100}%)`;
};

// Handle arrow clicks
btnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

const navBtn = document.getElementById("navBtn");
const navUl = nav.querySelector("ul");
const closeNav = navUl.querySelector("button");

//Handles Open Nav Button Clicks
navBtn.addEventListener("click", (e) => {
  navUl.classList.add("token");
});

//Handles Close Nav Button Click
closeNav.addEventListener("click", (e) => {
  navUl.classList.remove("token");
});

//Close Nav When Any Navigation Link is Clicked
const li = navUl.querySelectorAll("li");
li.forEach((e) =>
  e.addEventListener("click", (e) => {
    closeNav.click();
  })
);
