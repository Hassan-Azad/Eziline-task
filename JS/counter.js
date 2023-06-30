function animateValue(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.innerText = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

const Element = document.getElementById("count");
animateValue(Element, 0, 80, 5000);
const Element0 = document.getElementById("count0");
animateValue(Element0, 0, 100, 5000);
const Element1 = document.getElementById("count1");
animateValue(Element1, 0, 27, 5000);
const Element2 = document.getElementById("count2");
animateValue(Element2, 0, 10, 5000);
