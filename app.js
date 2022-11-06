// Select items

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Function to open navigation menu on mobile device

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Function to close navigation menu on mobile device

navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// preloader

const preloader = document.querySelector(".preloader");
const autoTyping = document.querySelector(".auto-type");



function myPreloader() {
  window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
  });
}

setTimeout(myPreloader, 10);
clearTimeout(myPreloader, 1000);

// Preload Text
function preloaderText() {
  let text = "Please reload the page manually if it doesn't redirect";
  return text;
}
autoTyping.innerText = preloaderText();
