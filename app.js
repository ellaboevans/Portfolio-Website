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

htextContent = hero();

// Hero Role Text

const role = document.querySelector("#role");

const roleText = () => {
  let roles = `${person.skill.programming} And ${person.skill.designTool}`;
  return roles;
};

role.innerText = roleText();

// Service Title

const serviceTitle = document.querySelector(".service-title");

let service = "What I do";

const serviceText = () => {
  let services = `${service}`;
  return services;
};

serviceTitle.innerText = serviceText();

// Project Description

const description = document.querySelector(".info");

let projectType = {
  type1: "finished",
  type2: "ongoing",
  kinds: {
    graphics: "UI Design",
    web: "Web Design",
  },
};
// ("Please glance at some of our projects. There are both finished and ongoing projects for UI and web design.");

const projectDescription = () => {
  let descriptions = `Please glance at some of our projects.There are both ${projectType.type1} and ${projectType.type2} for ${projectType.kinds.graphics} and ${projectType.kinds.web}`;
  return descriptions;
};

description.innerText = projectDescription();

// Copyright
const copyright = document.querySelector(".year");

let date = new Date();

const currentYear = () => {
  let year = date.getFullYear();
  copyright.innerText = year;
};
currentYear();

// Testimonial Review

const review = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu posuere sem. Curabitur id metus ac neque egestas gravida id eget ligula. Maecenas nec dui sem. Ut tristique a purus eu dapibus. Nam vel tempus libero, eget gravida odio. Donec ut vehicula velit, eget pretium ligula. Maecenas mi nunc, bibendum a neque vitae, suscipit mattis nisl",
    author: "Yaw Karikari Wiafe",
    job: "Programming Head",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu posuere sem. Curabitur id metus ac neque egestas gravida id eget ligula. Maecenas nec dui sem. Ut tristique a purus eu dapibus. Nam vel tempus libero, eget gravida odio. Donec ut vehicula velit, eget pretium ligula. Maecenas mi nunc, bibendum a neque vitae, suscipit mattis nisl",
    author: "Emmanuel Elabo",
    job: "CEO, JOEMAG",
    img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu posuere sem. Curabitur id metus ac neque egestas gravida id eget ligula. Maecenas nec dui sem. Ut tristique a purus eu dapibus. Nam vel tempus libero, eget gravida odio. Donec ut vehicula velit, eget pretium ligula. Maecenas mi nunc, bibendum a neque vitae, suscipit mattis nisl",
    author: "David Elabo",
    job: "Music Director",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu posuere sem. Curabitur id metus ac neque egestas gravida id eget ligula. Maecenas nec dui sem. Ut tristique a purus eu dapibus. Nam vel tempus libero, eget gravida odio. Donec ut vehicula velit, eget pretium ligula. Maecenas mi nunc, bibendum a neque vitae, suscipit mattis nisl",
    author: "Reginald Elabo",
    job: "Manager, JOEMAG",
    img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Select needed item

const img = document.querySelector("#testifier-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector(".testimonial-text");
// Select Arrows
const prevArrow = document.querySelector(".left-arrow");
const nextArrow = document.querySelector(".right-arrow");

// Setup starting
let currentReview = 0;

// It should show after window loads
window.addEventListener("DOMContentLoaded", function () {
  showReview();
});

// Show review based on item

function showReview() {
  const initialReview = review[currentReview];
  text.textContent = initialReview.text;
  author.textContent = initialReview.author;
  job.textContent = initialReview.job;
  img.src = initialReview.img;
}

// nextArrow

nextArrow.addEventListener("click", function () {
  currentReview++;
  if (currentReview > review.length - 1) {
    currentReview = 0;
  }
  showReview();
});

// prevArrow

prevArrow.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = review.length - 1;
  }
  showReview();
});
