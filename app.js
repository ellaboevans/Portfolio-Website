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
let text = "Loading...";
let i = 0;

function writeText() {
  autoTyping.innerText = text.slice(0, i);
  i++;
  if (i > text.length) {
    i = 0;
  }
}

setInterval(writeText, 100);

function myPreloader() {
  window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
  });
}

setTimeout(myPreloader, 10);
clearTimeout(myPreloader, 1000);
