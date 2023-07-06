// animation
function reveal() {
  var reveals = document.querySelectorAll(
    ".phone, .Email, .content h6, .content, .form, .logo_header, .main_nav li button, .main_nav li i, .img img, .intro, .box1, .box2, .objective, .project_des > .content,.project_img img, .box, .box p, .box h2, .box button "
  );
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
