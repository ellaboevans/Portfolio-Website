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

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// Preload Text
function preloaderText() {
  let text = "Please reload the page manually if it doesn't redirect";
  return text;
}
autoTyping.innerText = preloaderText();

// Hero Head Text

const heroText = document.querySelector(".hero-head");

let person = {
  firstName: "Evans",
  lastName: "Elabo",
  skill: {
    programming: "Web Developer",
    designTool: "UI/UX Designer",
  },
};

const hero = () => {
  let head = `${person.firstName} ${person.lastName}`;
  return head;
};

heroText.innerHTML = hero();

// Hero Role Text

const role = document.querySelector("#role");

const roleText = () => {
  let roles = `${person.skill.programming} And ${person.skill.designTool}`;
  return roles;
};

role.innerText = roleText();
