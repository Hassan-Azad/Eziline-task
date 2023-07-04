// function myFunction() {
//   var x = document.getElementById("navbar");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// Get the hamburger icon and the nav_links element
// const hamburgerIcon = document.querySelector(".icon");
// const navLinks = document.querySelector(".nav_links");

// // Add a click event listener to the hamburger icon
// hamburgerIcon.addEventListener("click", function () {
//   // Toggle the active class on the nav_links element
//   navLinks.classList.toggle("active");
// });

const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});
