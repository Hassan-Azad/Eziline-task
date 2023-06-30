function createSliderSection(imageSrc, heading, subheading) {
  const section = document.getElementById("slider");
  section.innerHTML = "";

  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "image");

  const image = document.createElement("img");
  image.setAttribute("src", imageSrc);
  image.setAttribute("alt", "");

  imageDiv.appendChild(image);

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "content");

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt perferendis sint non possimus atque, obcaecati est quibusdam distinctio consequatur ratione mollitia voluptatibus maxime iusto cumque repellat? Ratione quidem tempore voluptatum?";

  const headingElement = document.createElement("h3");
  headingElement.textContent = heading;

  const subheadingElement = document.createElement("h5");
  subheadingElement.textContent = subheading;

  contentDiv.appendChild(paragraph);
  contentDiv.appendChild(headingElement);
  contentDiv.appendChild(subheadingElement);

  section.appendChild(imageDiv);
  section.appendChild(contentDiv);

  section.classList.remove("slide-in-from-left");
  void section.offsetWidth; // Trigger reflow
  section.classList.add("slide-in-from-left");
}

const button = document.getElementById("button");
button.addEventListener("click", function () {
  const imageSrc = "images/testi21.png";
  const heading = "Amman Payne";
  const subheading = "CEO of Figma";

  createSliderSection(imageSrc, heading, subheading);
});
const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
  const imageSrc = "images/testimonials-img.jpg";
  const heading = "Jared Warner";
  const subheading = "CEO of Figma";

  createSliderSection(imageSrc, heading, subheading);
});
