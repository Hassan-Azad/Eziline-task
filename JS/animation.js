window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".project_img img");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect();

    // If the element is in the viewport
    if (position.top < window.innerHeight) {
      element.style.transform = "rotate(0deg)"; // Show the element
    } else {
      element.style.transform = "rotate(-10deg)"; // Reset the element to its original position
    }
  }
});
