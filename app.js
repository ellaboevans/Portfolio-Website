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
    text: "“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all",
    author: "Yaw Karikari Wiafe",
    job: "Programming Head",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    text: "My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.",
    author: "Emmanuel",
    job: "CEO, JOEMAG",
    img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    text: "Now it’s almost like having a designer right here with me. I just choose the page, make the change and click save. It’s so simple. Thanks, guys!”",
    author: "David",
    job: "Music Director",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    text: "Codeconcept is a fantastic spot in the hybrid world, whether you're a small or large corporation carrying out anything from a discrete modernization program to a digital transformation campaign.",
    author: "Reginald",
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

// Display Project
const projectItems = [
  {
    id: 1,
    link: "https://github.com/ellaboevans/Intro-section-with-dropdown-navigation",
    thumbnail:
      "https://github.com/ellaboevans/Intro-section-with-dropdown-navigation/raw/main/design/desktop-shot.png",
    projectName: "Introduction Section",
  },
  {
    id: 2,
    link: "https://github.com/ellaboevans/stat-preview-card-component-view",
    thumbnail:
      "https://user-images.githubusercontent.com/74984305/178721622-0f0a87c1-8de8-4fcf-bd13-f76025bf826e.png",
    projectName: "Statistics Card Preview",
  },
  {
    id: 3,
    link: "https://github.com/ellaboevans/Product-Card-Preview-Component",
    thumbnail:
      "https://github.com/ellaboevans/Product-Card-Preview-Component/raw/main/images/Frontend-Mentor-Product-preview-card-component.png",
    projectName: "Product Preview Card",
  },
  {
    id: 4,
    link: "https://github.com/ellaboevans/Product-Card-Preview-Component",
    thumbnail:
      "https://github.com/ellaboevans/Product-Card-Preview-Component/raw/main/images/Frontend-Mentor-Product-preview-card-component.png",
    projectName: "Product Preview Card",
  },
];

const project = document.querySelector(".project");

window.addEventListener("DOMContentLoaded", function () {
  populateProject(projectItems);
});

function populateProject(projectItem) {
  let displayProject = projectItem.map(function (item) {
    // console.log(item)
    return `<a
    href=${item.link}
    target="_blank" class="project-link"
  >
    <div class="project-cards">
      <div class="project-card--image card-hover">
        <img
          src="${item.thumbnail}"
          class="project-image"
          alt=${item.projectName}
        />
      </div>
      <div class="project-name">
        <h5 class="names">${item.projectName}</h5>
        <i class="fa fa-external-link concept"></i>
      </div>
    </div>
  </a>`;
  });
  displayProject = displayProject.join("");
  project.innerHTML = displayProject;
}

// Display Services
const serviceCards = [
  {
    id: 1,
    icon: `<iconify-icon icon="carbon:gui-management"></iconify-icon
    >`,
    serviceName: "UI/UX Design",
    desc: "For a website, app, I design the user interface. my job is to engage developers to acquire customer need.",
  },
  {
    id: 2,
    icon: `<iconify-icon
    icon="icon-park-outline:graphic-stitching-four"
  ></iconify-icon
>`,
    serviceName: "Graphics Design",
    desc: "I design magazine layouts, branding, publicity materials, and visual communications like advertisements.",
  },
  {
    id: 3,
    icon: `<iconify-icon
    icon="fluent:window-dev-tools-20-regular"
  ></iconify-icon>`,
    serviceName: "Web Development",
    desc: "I'm in charge of creating the webpage's visual components, which visitors will see and interact with.",
  },
];

const serviceCard = document.querySelector(".card-main");

// console.log(serviceCard);

window.addEventListener("DOMContentLoaded", function () {
  displayServicesCArds(serviceCards)
});

function displayServicesCArds (showCard){
  let displayCard = showCard.map(function (aService) {
    // console.log(aService)
    return `<div class="card">
    <div class="card-info">
    <i class="service-icon"
      >${aService.icon}</i>
    <h5 class="service-type">${aService.serviceName}</h5>
    <p class="service-description">
      ${aService.desc}
    </p>
  </div>
  </div>`;
  });
  displayCard = displayCard.join("");
  serviceCard.innerHTML = displayCard
  // console.log(displayCard);
}

// Greet whether Morning || Afternoon || Evening
// Based on simple logic

const hello = document.querySelector(".hello");

let day = new Date();
let hour = day.getHours();


function greet() {
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 12 && hour < 17) {
    return "Good afternoon";
  }else
  return "Good evening";
}
hello.textContent= greet();
