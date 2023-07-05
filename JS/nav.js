const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});

// avtive page

// Get the current page URL
var currentPageUrl = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll(".main_nav li a");

// Iterate over each navigation link
navLinks.forEach(function (link) {
  // Check if the link's href matches the current page URL
  if (link.href === currentPageUrl) {
    // Add the "nav-active" class to the active link
    link.classList.add("nav-active");
  }
});
